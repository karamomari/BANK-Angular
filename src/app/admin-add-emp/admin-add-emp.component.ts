import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ServiceAddempService } from './service-addemp.service';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HomeAdminComponent } from '../home-admin/home-admin.component';
import { AdminCheakLoanComponent } from '../admin-cheak-loan/admin-cheak-loan.component';
import emailjs,{ EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-admin-add-emp',
  standalone: true,
  imports: [CommonModule,HttpClientModule,RouterModule,ReactiveFormsModule,FormsModule,HomeAdminComponent,AdminCheakLoanComponent],
  templateUrl: './admin-add-emp.component.html',
  styleUrl: './admin-add-emp.component.css'
})
export class AdminAddEmpComponent  implements OnInit{
id:any
Typeem:any="1"
testt:any={
  FirstName: '',
  LastName: '',
  Salary: '',
  Type: '',
  braid: '',
  email:'',
  idadmin:''
}


constructor(private act:ActivatedRoute,private ser:ServiceAddempService,private router: Router){ 
  this.id= this.act.snapshot.paramMap.get("id")
  
}






ngOnInit(): void {
  
}

onJobTypeChange(event: any) {
  this.Typeem = event.target.value;
}


AddEmp(){

  this.testt.idadmin=this.id
  this.ser.AddEmp(this.testt).subscribe((res:any)=>{

 alert(res.message)
})
}


sendEmail(toemail:any,message:any) {
  emailjs.send("service_meipv0f", "template_ehxklw1", {
    from_name: "bank",
    to_name: "amer",
    from_email: "Albank@gmail.com",
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