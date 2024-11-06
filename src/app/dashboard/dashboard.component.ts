import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { ApiServiceService } from '../api-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    RouterModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    CommonModule,
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  admin: any;
  storeduser: any;

  constructor(private apiService: ApiServiceService, private route: Router) {}

  ngOnInit(): void {
    this.storeduser = localStorage.getItem('user');
    this.fetchAdminData();
  }

  fetchAdminData(): void {
    this.apiService.getAccount(this.storeduser).subscribe(
      (response: any) => {
        console.log('loginns', response);
        this.admin = response;
        console.log('Admin111:', this.admin);
      },
      (error) => {
        console.error('Error fetching admin data:', error);
      }
    );
  }

  isSidenavOpen = false;

  toggleSidenav() {
    this.isSidenavOpen = !this.isSidenavOpen;
  }

  token = localStorage.getItem('authToken');

  logout(token: any) {
    if (token) {
      this.apiService.logoutLearner(token).subscribe(
        (response: any) => {
          console.log(response);
          localStorage.removeItem('authToken'); // Removing token from local storage
          this.route.navigate(['/login']); // Navigate to login
        },
        (error: any) => {
          if (error.status === 401) {
            console.error('Unauthenticated. Please login again');
            this.route.navigate(['/login']); // Redirect to login if unauthenticated
          } else {
            console.error('Error occurred while logging out', error);
          }
        }
      );
    } else {
      console.error('No token found');
    }
  }

  // Call this method after any action that updates admin data
  refreshAdminData() {
    this.fetchAdminData();
  }
}
