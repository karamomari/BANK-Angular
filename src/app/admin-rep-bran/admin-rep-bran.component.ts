import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin-rep-bran',
  standalone: true,
  imports: [CommonModule,HttpClientModule,RouterModule,ReactiveFormsModule,FormsModule],
  templateUrl: './admin-rep-bran.component.html',
  styleUrl: './admin-rep-bran.component.css'
})
export class AdminRepBranComponent implements OnInit {
  @Input() allEmp:any

  ngOnInit(): void {
  
}
}
