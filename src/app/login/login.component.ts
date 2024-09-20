import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { ApiServiceService } from '../api-service.service';

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

          // const user = response.user;
          // console.log('user:', user);
          // localStorage.setItem('user', user);
  
          // Store the token in local storage (or a service if needed)
          localStorage.setItem('authToken', token);
  
          // Navigate to the desired page
          if(token != null){
            this.route.navigate(['/main/Home/']);
          }else{
            console.error('Invalid Login');
          }
        },
        error => {
          console.error('Error logging in:', error);
        }
      );
    } else {
      console.error('Form is not valid');
    }
  }

}
