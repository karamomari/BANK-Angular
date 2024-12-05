import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OtherserService } from '../home-other-emp/service/otherser.service';

@Component({
  selector: 'app-other-reg',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './other-reg.component.html',
  styleUrl: './other-reg.component.css'
})
export class OtherRegComponent implements OnInit{
@Output() press=new EventEmitter<any>();
  constructor(private serivce:OtherserService){}
infotoreg:any={
  FirstName:'',
  LastName:'',
  Ssn:'',
  City:'',
  Street:'',
  Age:'',
  Email:'',
  Pass:'',

}
  ngOnInit() {
  // alert("success")
  console.log("reg")
}


api(){
  if(this.infotoreg.Email.trim())
  {
      this.serivce.api(this.infotoreg.Email).subscribe((res:any)=>{
      if (res.deliverability === 'DELIVERABLE') 
      {
       this.addcustmer()
      }
      else
      {
       alert("check Email this email is incorrect")
      }
     })
  }

    else
  {
      alert("please enter email")
  }

}


addcustmer(){
  this.infotoreg.Pass
  this.press.emit(this.infotoreg);
}

}
