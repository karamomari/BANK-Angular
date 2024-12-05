import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HomeUserComponent } from './home-user/home-user.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { IndexComponent } from './home/index/index.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HomeUserComponent,HttpClientModule,IndexComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myBank';
  constructor(private http:HttpClient){}
}
