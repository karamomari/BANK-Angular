import { Component, Input, OnInit, Output } from '@angular/core';
import { on } from 'node:events';

@Component({
  selector: 'app-admin-details-emp',
  standalone: true,
  imports: [],
  templateUrl: './admin-details-emp.component.html',
  styleUrl: './admin-details-emp.component.css'
})
export class AdminDetailsEmpComponent implements OnInit {
  
  @Input() dataOFemp:any

  
  ngOnInit(): void {
console.log(this.dataOFemp)
  }


  

}
