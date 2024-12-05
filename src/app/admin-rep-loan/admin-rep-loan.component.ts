import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin-rep-loan',
  standalone: true,
  imports: [CommonModule,HttpClientModule,RouterModule,ReactiveFormsModule,FormsModule],
  templateUrl: './admin-rep-loan.component.html',
  styleUrl: './admin-rep-loan.component.css'
})
export class AdminRepLoanComponent implements OnInit {

  @Input() allLoan:any

  ngOnInit(): void {
  
}


}
