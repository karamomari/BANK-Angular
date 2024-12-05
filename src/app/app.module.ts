import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,BrowserModule,RouterModule,HttpClientModule
  ]
})
export class AppModule { }
import { provideHttpClient, withFetch } from '@angular/common/http';
