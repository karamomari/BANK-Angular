import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin-one-loan',
  standalone: true,
  imports: [CommonModule,HttpClientModule,RouterModule,ReactiveFormsModule,FormsModule],
  templateUrl: './admin-one-loan.component.html',
  styleUrl: './admin-one-loan.component.css'
})
export class AdminOneLoanComponent implements OnInit{

  ngOnInit(): void {
  
}
}
