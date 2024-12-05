import { RouterLink, RouterModule } from '@angular/router';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    // LoginComponent,
    // SignupComponent,
    RouterLink,
    RouterModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  showMenu: boolean = false;

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  closeMenu(event: any) {
    if (!event.target.closest('.menu-button')) {
      this.showMenu = false;
    }
  }
}
