import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink, RouterModule } from '@angular/router';
import { ServiceLoanService } from './service-loan.service';
import { Observable } from 'rxjs';
import emailjs,{ EmailJSResponseStatus } from 'emailjs-com';
@Component({
  selector: 'app-admin-cheak-loan',
  standalone: true,
  imports: [CommonModule,HttpClientModule,RouterModule,ReactiveFormsModule,FormsModule],
  templateUrl: './admin-cheak-loan.component.html',
  styleUrl: './admin-cheak-loan.component.css'
})
export class AdminCheakLoanComponent implements OnInit {
id:any
allLoan:any
idLoan:any
detilasLoan:any
//to show one juset
all:boolean=true
one:boolean=false


constructor(public act:ActivatedRoute,private service:ServiceLoanService,private router: Router){
this.id= this.act.snapshot.paramMap.get("id")

}



ngOnInit() 
{
this.getallloan()

}




getallloan(){
  this.all=true
  this.one=false
  this.service.getallloan().subscribe((res:any)=>{
this.allLoan=res
console.log(this.allLoan)
setTimeout(() => {
  const element = document.getElementById('all');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}, 100); 
  })
}


//لازم يرجع الidLoan من الHTML
getoneLoan(idl:any){
  this.all=true
  this.one=true
  this.idLoan=idl
  this.service.getoneLoan(idl).subscribe((res:any)=>{
    this.detilasLoan=res
    console.log(this.detilasLoan)
    setTimeout(() => {
      const element = document.getElementById('one');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100); 
  })
}



consentloan(){
  this.service.consentloan(this.idLoan).subscribe(res=>{
    this.router.navigate([`/admin/${this.id}`])
    this.sendEmail(this.detilasLoan.email,"Congratulations! Your loan has been approved")

  })
}


rejectloan(){
  this.allLoan=6
  this.service.rejectloan(this.idLoan).subscribe(res=>{
    this.router.navigate([`/admin/${this.id}`])
    this.sendEmail(this.detilasLoan.email,"We regret to inform you that your loan application has not been approved.")

  })
}



sendEmail(toemail:any,message:any) {
 
  emailjs.send("service_meipv0f", "template_ehxklw1", {
    from_name: "bank",
    to_name: toemail,
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
alert("success")


}



}
