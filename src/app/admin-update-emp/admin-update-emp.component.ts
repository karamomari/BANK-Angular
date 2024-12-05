import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-admin-update-emp',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './admin-update-emp.component.html',
  styleUrl: './admin-update-emp.component.css'
})
export class AdminUpdateEmpComponent implements OnInit {
@Input() detelaes:any




@Output() press = new EventEmitter<any>();

infoudate:any={
  firstName: '',
  lastName: '',
  salary: '',
  startDate: '',
  type: '',
  photo:'',
  branchId: ''
  //تذا بدي اضيف كمان اشي
}


  ngOnInit(): void {
  
}

prametinfo(){
  this.press.emit(this.infoudate);
}


}
