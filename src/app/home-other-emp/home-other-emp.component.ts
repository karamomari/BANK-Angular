import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SpinnerComponent } from '../shared/spinner/spinner.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router, RouterModule, RouterOutlet } from '@angular/router';
import { OtherserService } from './service/otherser.service';
import { OtherRegComponent } from '../other-reg/other-reg.component';
import emailjs,{ EmailJSResponseStatus } from 'emailjs-com';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

@Component({
  selector: 'app-home-other-emp',
  standalone: true,
  imports: [RouterModule,RouterOutlet,HttpClientModule,CommonModule,SpinnerComponent,FormsModule,
    OtherRegComponent
  ],
  templateUrl: './home-other-emp.component.html',
  styleUrl: './home-other-emp.component.css'
})
export class HomeOtherEmpComponent  implements OnInit{
  id:any
idTocompletReg:any
infoEmp:any
allEmail:any
infooneEmail:any={
  id:'',
  mas:''
}
 

infotoupdateCus:any={
  ssn: '',
  lastName: '',
  firstName: '',
  photo: '',
  email: '',
  creditPoint: '',
  pass: '',
  street: '',
  city: ''
}


infotocompletRegAc:any={
  Password:'',
  UserName:'',
  Balance:'',
  TypeAccount:''
}














infoNewCus:any
newMsg:any
SSNtoSerach:any
infooneCus:any
infoprocess:any
hashpass:any

other:boolean=true
toRegComp:boolean=false
tocompletRegAc:boolean=false
CheakEmails:boolean=false
toreblayEmail:boolean=false
toshownewcus:boolean=false
toshowoneCus:boolean=false
toupdateCus:boolean=false
toshowprocess:boolean=false
constructor(private serivce:OtherserService,private act:ActivatedRoute,private router: Router)
  {
    this.id=this.act.snapshot.paramMap.get("id")
  }

  ngOnInit(): void {
    this.getInfo()
    this.other=true
    this.toRegComp=false
    this.tocompletRegAc=false
    this.CheakEmails=false
    this.toreblayEmail=false
    this.toshownewcus=false
    this.toshowoneCus=false
    this.toupdateCus=false
    this.toshowprocess=false
  }
  



  getInfo(){
      this.serivce.Getinfo(this.id).subscribe(res=>{
      this.infoEmp=res
      console.log(this.infoEmp)
      console.log(this.id)
    })
  }




  regcust1(){
    this.other=true
    this.toRegComp=true
    this.tocompletRegAc=false
    this.CheakEmails=false
    this.toreblayEmail=false
    this.toshownewcus=false
    this.toshowoneCus=false
    this.toupdateCus=false
    this.toshowprocess=false
    setTimeout(() => {
      const element = document.getElementById('toRegComp');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100); 
  }


passs:string=''
infoo:any
mm:boolean=true
receiveData(info:any){
  this.hash(info.Pass,info)

console.log(this.infoo)

this.serivce.RegsterCus(this.infoo).subscribe((res:any)=>{
  if(res.message=="this Email aredey exites"){
    alert("this Email  or ssn aredey exites")
   this.mm=false
  }
  else{
this.idTocompletReg=res}
})
if(this.mm){
this.other=false
this.toRegComp=false
this.tocompletRegAc=true

setTimeout(() => {
  const element = document.getElementById('tocompletRegAc');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}, 100);
 }
}


hash(pass:any,info:any)
{
  this.infoo=info
  this.serivce.hash(pass).subscribe((res:any)=>{
    console.log(res.Digest)
    this.infoo.Pass=res.Digest
  })
}



CheckEmail()
{
  this.toRegComp=false
  this.tocompletRegAc=false
  this.CheakEmails=true
  this.toreblayEmail=false
  this.toshownewcus=false
  this.toshowoneCus=false
  this.toupdateCus=false
  this.toshowprocess=false
this.serivce.CheckEmail().subscribe((res:any)=>{
  if(res.message == "There are no inquiries"){
    alert("There are no inquiries" )
  }
    else{
      this.allEmail=res
  setTimeout(() => {
    const element = document.getElementById('CheakEmails');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, 100); 
    }
  })
}




Rebly(idhelp:any){
this.other=true
this.toreblayEmail=true
setTimeout(() => {
  const element = document.getElementById('toreblayEmail');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}, 100); 
this.serivce.getonehelp(idhelp).subscribe(res=>{
  this.infooneEmail=res
  console.log(this.infooneEmail)
})
}




Rebly2(){

setTimeout(() => {
  const element = document.getElementById('CheakEmails');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}, 100); 

  console.log(this.infooneEmail.id)
  console.log(this.newMsg)
  this.serivce.Reblay(this.infooneEmail.hlepNum,this.newMsg).subscribe(res=>{

    alert("success")

    setTimeout(() => {
      const element = document.getElementById('CheakEmails');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
    
  })

}





logout(){
  this.serivce.Getinfo(0).subscribe(res=>{
    this.router.navigate([`/home/index`])
  })
}


complereg(){
  console.log(this.id)
  this.serivce.complereg(this.idTocompletReg,this.infotocompletRegAc).subscribe(res=>{
    this.sendEmail("karamomari20010@gmail.com","Welcome! Your account has been activated")
    console.log("success")
  })
  // this.ngOnInit()
  this.other=true
this.toRegComp=false
this.tocompletRegAc=false
}






viewNewCus(){
 
  this.serivce.viewNewCus().subscribe((res:any)=>{
    if(res.message=="There are no new accounts")
    {alert("There are no new accounts")}
    else{
      this.infoNewCus=res
      this.other=true
      this.toshownewcus=true
      this.toRegComp=false
      this.tocompletRegAc=false
      this.CheakEmails=false
      this.toreblayEmail=false
      this.toshowoneCus=false
      this.toupdateCus=false
      this.toshowprocess=false
setTimeout(() => {
  const element = document.getElementById('toshownewcus');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}, 100); 

    }
  })
}


consentCus(id:any){
  this.serivce.consentCus(id).subscribe(res=>{
    alert("success")
    this.sendEmail('karamomari200010@gmail.com',"Congratulations, you have been approved")
    this.viewNewCus() 
setTimeout(() => {
  const element = document.getElementById('toshownewcus');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}, 100); 
  })

}


viewCus(){
  this.serivce.viewCus(this.SSNtoSerach).subscribe((res:any)=>{
    if(res.message=="dont faund Custmer that has this ssn"){alert("dont faund Custmer that has this ssn")}
    else
    {
      this.infooneCus=res
       this.toshowoneCus=true
       this.other=true
       this.toRegComp=false
       this.tocompletRegAc=false
       this.CheakEmails=false
       this.toreblayEmail=false
       this.toshownewcus=false
       this.toupdateCus=false
       this.toshowprocess=false
       
setTimeout(() => {
  const element = document.getElementById('toshowoneCus');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}, 100); 
    }
  })
}



activationCus(idCus:any){
this.serivce.activationCus(idCus).subscribe((res:any)=>{
  if(res.message=="this Employee alredy activation"){
    alert("this Employee alredy activation")
  }
  else{
  alert("success")
  this.sendEmail(this.infoNewCus.email,"Your account has been activated")
  // this.ngOnInit()
  }
})
}




suspendingCus(idCus:any){
this.serivce.suspendingCus(idCus).subscribe((res:any)=>{
  if(res.message=="this Employee alredy suspending"){
    alert("this Employee alredy suspending")
  }
  else{
  alert("success")
  this.sendEmail(this.infoNewCus.email,"Your account has been deactivated")
  this.ngOnInit()
}
})
}


toshowformupdate(){
this.toupdateCus=true
this.other=true
this.toRegComp=false
this.CheakEmails=false
this.toreblayEmail=false
this.toshownewcus=false
this.toshowoneCus=false
this.toshowprocess=false
}


updateCus(idCus:any){
  this.toupdateCus=true
  this.other=true
  this.serivce.updateCus(idCus,this.infotoupdateCus).subscribe((res:any)=>{
    alert("sucess")
    this.infooneCus=res
    this.viewCus()
  })
}



showprocess(idCus:any){
this.serivce.showprocess(idCus).subscribe((res:any)=>{
  if(res.message=="No transactions have been made on this account")
    {alert("No transactions have been made on this account")}
else{
this.infoprocess=res
this.toshowprocess=true
setTimeout(() => {
  const element = document.getElementById('toshowprocess');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}, 100);
}
})
}


stopAtm(idCus:any){
this.serivce.stopAtm(idCus).subscribe((res:any)=>{

  if(res && res.message=="This Custmer dont have ATM"){alert("This Custmer dont have ATM")}
  else if(res && res.message=="The account is still inactive"){alert("The account is still inactive")}
 
   else
   {
    alert("success")
  this.sendEmail(this.infoNewCus.email,"Your ATM card associated with your account has been deactivated")
  }

})
}




api(email:any){
  this.serivce.api('20199803187@ses.yu.edu.jo').subscribe((res:any)=>{
    console.log(res)
    if (res.deliverability === 'DELIVERABLE') 
      {
     alert("ll")
      }
      else{
        alert("kk")
      }
  })
}






sendEmail(toemail:any,message:any) {
 
  emailjs.send("service_meipv0f", "template_ehxklw1", {
    from_name: "bank",
    to_name:toemail,
    from_email: "",
    to_email: toemail,
    message: message,
    reply_to: "123",
  }, 'rPPLLJBc9FPs3CgBW')
  .then((result: EmailJSResponseStatus) => {
    console.log(result.text);
  }, (error: any) => {
    console.log(error.text);
  });
}







}
