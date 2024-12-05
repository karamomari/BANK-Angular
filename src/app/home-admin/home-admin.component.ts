import { Component, Input, input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AdminserService } from './service/adminser.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormBuilder, FormControl, FormGroup, FormsModule, NgModel, NgModelGroup, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AdminAddEmpComponent } from '../admin-add-emp/admin-add-emp.component';
import { AdminCheakLoanComponent } from '../admin-cheak-loan/admin-cheak-loan.component';
import { AdminDetailsEmpComponent } from '../admin-details-emp/admin-details-emp.component';
import { AdminUpdateEmpComponent } from '../admin-update-emp/admin-update-emp.component';
import { AdminRepBranComponent } from '../admin-rep-bran/admin-rep-bran.component';
import { AdminRepLoanComponent } from '../admin-rep-loan/admin-rep-loan.component';
import { NavAdminComponent } from '../shared/nav-admin/nav-admin.component';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';



@Component({
  selector: 'app-home-admin',
  standalone: true,
  imports: [CommonModule,HttpClientModule,RouterModule,ReactiveFormsModule,FormsModule
    ,AdminAddEmpComponent,AdminCheakLoanComponent,
    AdminDetailsEmpComponent,AdminUpdateEmpComponent,AdminRepBranComponent,AdminRepLoanComponent,NavAdminComponent
  ],
  templateUrl: './home-admin.component.html',
  styleUrl: './home-admin.component.css',
 
})
export class HomeAdminComponent implements OnInit {
id:any
infoForAdmin:any


NameEmp:any={
  firstName:'',
  lastName:''
}

NameCus:any={
  firstName:'',
  lastName:''
}




infoudate:any={
  firstName: '',
  lastName: '',
  salary: '',
  startDate: '',
  type: '',
  photo:'',
  branchId: ''
}

infooneCus:any
idEmpreturen:any
other:boolean=true
dataOFemp:any
dataOFempdisplay:boolean=false
toupdateEmp:boolean=false
infoToupdate:any

infoNewCus:any

SSNtoSerach:any
RepEmp:any
RepEmpComp:boolean=false


allLoan:any
RepLoanComp:boolean=false


toshowoneCus:boolean=false


ngOnInit(): void 
  {
    this.GetinfoAdmin()
    this.other=true
    this.dataOFempdisplay=false
    this.toupdateEmp=false
    this.RepEmpComp=false
    this.RepLoanComp=false
    this.toshowoneCus=false
  }

  
constructor(private act:ActivatedRoute,private ser:AdminserService,private router: Router){ //get prameter from link
 this.id= this.act.snapshot.paramMap.get("id")
}


GetinfoAdmin(){
  this.ser.GetinfoAdmin(this.id).subscribe(res=>{
    this.infoForAdmin=res
    console.log(this.infoForAdmin)
  })
}


 


viewdetilasEmp(){
  this.ser.viewdetilasEmp(this.NameEmp).subscribe((res:any)=>{
    if (res.message=="I'm sorry, I couldn't find any employee by that name") {
      alert("I'm sorry, I couldn't find any employee by that name")
  }
  
  
    this.dataOFemp=res
    this.idEmpreturen=this.dataOFemp.id
    this.dataOFempdisplay=true
    this.other=true
    setTimeout(() => {
      const element = document.getElementById('dataOFempdisplay');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50); 
    this.toupdateEmp=false
    this.RepEmpComp=false
    this.RepLoanComp=false
  })


}


suspending(){
  console.log(this.idEmpreturen)
this.ser.suspending(this.idEmpreturen).subscribe((res:any)=>{
  if(res.message=="this Employee alredy suspendingEmp"){
    alert("this Employee alredy suspendingEmp")
  }
  else{
  console.log("success")
}
})
}




activation(){
  this.ser.activation(this.idEmpreturen).subscribe((res:any)=>{
    if(res.message=="this Employee alredy suspendingEmp"){
      alert("this Employee alredy suspendingEmp")
    }
    else{
    console.log("sucess")
  }
  })
}



updateEmp(){
  this.toupdateEmp=true
  this.dataOFempdisplay=false
  this.other=true
    this.RepEmpComp=false
    this.RepLoanComp=false
    setTimeout(() => {
      const element = document.getElementById('toupdateEmp');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100); 

}


receiveData() {
  this.ser.updateEmp2(this.idEmpreturen,this.infoudate).subscribe(res=>{
    console.log("success")
    this.ngOnInit()
   
  })
  
}



reportemp(id:any){
this.ser.reportemp(id).subscribe(res=>{
 console.log(res)
  this.RepEmp=res
  this.RepEmpComp=true
  this.other=true
  this.dataOFempdisplay=false
    this.toupdateEmp=false
    this.RepLoanComp=false
  setTimeout(() => {
    const element = document.getElementById('RepEmpComp');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, 100); 
})
}








logout(){
  this.ser.GetinfoAdmin('0').subscribe(res=>{
    this.router.navigate([`/home/index`])
  })
}






viewCus(){
  this.ser.viewCus(this.SSNtoSerach).subscribe((res:any)=>{
    if(res.message=="dont faund Custmer that has this ssn"){alert("dont faund Custmer that has this ssn")}
    else
    {
      this.infooneCus=res   
      this.toshowoneCus=true
        this.other=true
        this.dataOFempdisplay=false
        this.toupdateEmp=false
        this.RepEmpComp=false
        this.RepLoanComp=false
        
        setTimeout(() => {
          const element = document.getElementById('toshowoneCus');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100); 
       
    }
  })
}






reportLoan(){
  this.ser.reportLoan().subscribe(res=>{
    this.allLoan=res
    this.other=true
    this.dataOFempdisplay=false
    this.toupdateEmp=false
    this.RepEmpComp=false
    this.RepLoanComp=true
  setTimeout(() => {
    const element = document.getElementById('RepLoanComp');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, 100); 
})

}









activationCus(idCus:any){
  this.ser.activationCus(idCus).subscribe(res=>{
    alert("success")
    this.sendEmail(this.infoNewCus.email,"Your account has been activated")
    this.ngOnInit()
  })
  }
  
  
  
  
  suspendingCus(idCus:any){
  this.ser.suspendingCus(idCus).subscribe(res=>{
    alert("success")
    this.sendEmail(this.infoNewCus.email,"Your account has been deactivated")
    this.ngOnInit()
  })
  }
  
  
  toshowformupdate(){
    this.other=true
    this.dataOFempdisplay=false
    this.toupdateEmp=false
    this.RepEmpComp=false
    this.RepLoanComp=false
    this.toshowoneCus=false
    this.toshowoneCus=true
  }
  
  







sendEmail(toemail:any,message:any) {
 
  emailjs.send("service_meipv0f", "template_ehxklw1", {
    from_name: "bank",
    to_name: "amer",
    from_email: "ko7860031@gmail.com",
    to_email: toemail,
    message: message,
    reply_to: "123",
  }, 'rPPLLJBc9FPs3CgBW')
  .then((result: EmailJSResponseStatus) => {
    console.log(result.text);
  }, (error: any) => {
    console.log(error.text);
  });
alert("success")


}



}
