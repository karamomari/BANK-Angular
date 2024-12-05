
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { SpinnerComponent } from '../../shared/spinner/spinner.component';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [
  
    RouterLink,
    NavbarComponent,
    RouterModule,SpinnerComponent
    
  ],

  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent implements OnInit {
  ngOnInit(): void {
    // window.location.reload();
  }

}
