import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { ApiServiceService } from '../api-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule,CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  loginForm = new FormGroup({
    email: new FormControl(null),
    password: new FormControl(null)
  })

  constructor(private apiService: ApiServiceService, private route: Router){}

  ngOnInit(): void {
    
  }

  login() {
    if (this.loginForm.valid) {
      this.apiService.verifyAdmin(this.loginForm.value).subscribe(
        (response: any) => {
          console.log('Response:', response);
  
          // Extract the token from the response
          const token = response.token;
          console.log('Token:', token);
  
          const user = response.user;
          console.log('user:', user);
  
          // Store the token and user ID in localStorage
          localStorage.setItem('user', user.adminID);
          localStorage.setItem('authToken', token);
  
          if (token != null) {
            // Success notification
            Swal.fire({
              icon: 'success',
              title: 'Login Successful',
              text: 'Welcome back!',
              timer: 2000,
              showConfirmButton: false,
            });
  
            // Navigate to the desired page
            this.route.navigate(['/main/Home/']);
          } else {
            console.error('Invalid Login');
            Swal.fire({
              icon: 'error',
              title: 'Invalid Login',
              text: 'Please check your credentials.',
            });
          }
        },
        error => {
          console.error('Error logging in:', error);
          Swal.fire({
            icon: 'error',
            title: 'Login Failed',
            text: 'An error occurred. Please try again later.',
          });
        }
      );
    } else {
      console.error('Form is not valid');
      Swal.fire({
        icon: 'warning',
        title: 'Form Invalid',
        text: 'Please fill in all required fields.',
      });
    }
  }
  

}
