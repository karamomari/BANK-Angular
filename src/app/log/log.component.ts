import { HttpClient, HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AdminserService } from '../home-admin/service/adminser.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ServiceLogService } from './service-log.service';
import { NavbarComponent } from "../home/navbar/navbar.component";

@Component({
  selector: 'app-log',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule, ReactiveFormsModule, FormsModule, NavbarComponent],
  templateUrl: './log.component.html',
  styleUrl: './log.component.css'
})
export class LogComponent implements OnInit{

constructor(private http:HttpClient,private ser:ServiceLogService,private router: Router)
{}


selectedJobType:any="Custmer"


infotolog:any={
  email:'',
  type:'',
  pass:''
}


infotoreg:any={
  FirstName:'',
  LastName:'',
  Ssn:'',
  City:'',
  Street:'',
  Age:'',
  Email:'',
  //  Image:null,
  Pass:''
  
}


  ngOnInit(): void {
  
}


onJobTypeChange(event: any) {
  this.selectedJobType = event.target.value;
}






Login(){
  
this.infotolog.type=this.selectedJobType
  this.ser.Login(this.infotolog).subscribe((res:any)=>{
    if(this.infotolog.type=="Custmer"){

  if(res.message=="your email or pass in correct")
    {
      alert("your email or pass in correct")
    }
    
    else if(res.message=="your account not Enable")
    {
      alert("your account not Enable")
    }
    
    else
    {
        this.router.navigate([`/homeuser/${res}`])

    }

  }


  
    else if(this.infotolog.type=="Admin"){
      if(res.message=="your email or pass in correct")
        {
          alert("your email or pass in correct")
        }
        
        else if(res.message=="your account not Enable")
        {
          alert("your account not Enable")
        }
        
        else
        {
        this.router.navigate([`/admin/${res}`])
        }
          
    }
  
    


    else if(this.infotolog.type=="Employee"){
      if(res.message=="your email or pass in correct")
        {
          alert("your email or pass in correct")
        }
        
        else if(res.message=="your account not Enable")
        {
          alert("your account not Enable")
        }
        
        else
        {
          this.router.navigate([`/employee/${res}`])
        }
    
    }

    else{
      alert("your attacer please out")
    }

  })
}










//trim to clear space 
Register(){
  console.log(this.infotoreg.Email)
  if(this.infotoreg.Email.trim()){
    this.api(this.infotoreg.Email)
    console.log(this.infotoreg)
  }
  else{
  alert("please enter email")
  }
  }





  api(email:any){
    this.ser.api(email).subscribe((res:any)=>{
      console.log(res)
      if (res.deliverability === 'DELIVERABLE') 
        {
      console.log(this.infotoreg)
          this.ser.Register(this.infotoreg).subscribe((res:any)=>{
            if(res && res.message=="This ssn already exists"){ alert("This ssn already exists")}
            
            else if(res && res.message=="This email already exists"){alert("This email already exists")}
            
            else
            {
              alert("seuucess please wait accept employee")
            }
             
          })
        }
        else{
          alert("The email is incorrect")
        }
    })
  }

}
