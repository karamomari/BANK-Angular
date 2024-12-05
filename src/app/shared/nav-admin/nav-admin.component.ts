import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { OtherserService } from '../../home-other-emp/service/otherser.service';


@Component({
  selector: 'app-nav-admin',
  standalone: true,
  imports: [],
  templateUrl: './nav-admin.component.html',
  styleUrl: './nav-admin.component.css'
})
export class NavAdminComponent {
constructor(private serivce:OtherserService){}
  sendEmail(toEmail: string) {
    emailjs.send("service_meipv0f", "template_ehxklw1", {
      from_name: "bank",
      to_name: "amer",
      from_email: "ko7860031@gmail.com",
      to_email: toEmail,
      message: "999",
      reply_to: "123",
    }, 'rPPLLJBc9FPs3CgBW')
    .then((result: EmailJSResponseStatus) => {
      console.log(result.text);
      alert("success");
    }, (error: any) => {
     console.log();
      alert(error.text);
    });
  }
  
  api(){
    this.serivce.api('2019980187@ses.yu.edu.jo').subscribe(res=>{
      console.log(res)
    })
  }
}
