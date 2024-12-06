import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ApiServiceService } from '../../../api-service.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-account-info',
  standalone: true,
  imports: [RouterLink,CommonModule,ReactiveFormsModule],
  templateUrl: './account-info.component.html',
  styleUrl: './account-info.component.css'
})
export class AccountInfoComponent implements OnInit{
admin:any;
storeduser:any;
userData: any;
  constructor(private apiService: ApiServiceService, private route: Router, ) {}

  selectedTeacherId: any;

  passwordForm = new FormGroup({
    currentPassword: new FormControl(null),
    password: new FormControl(null),
    password_confirmation: new FormControl(null)
  })

  storeTeacherId(studentid: number) {
    this.selectedTeacherId = studentid;
    console.log('Selected Teacher ID:', this.selectedTeacherId);
    localStorage.setItem('uploadID', this.selectedTeacherId)
  }

  ngOnInit(): void {
    // console.log(this.admin.adminid);
    this.storeduser = localStorage.getItem('user');
    console.log(this.storeduser);
  
  this.apiService.getAccount(this.storeduser).subscribe((response:any) => {
    console.log(response);  
    this.admin = response; 
    console.log('Admin:', this.admin);  
    // console.log(this.admin.adminid);
  },
  (error) => {
    console.error('Error fetching subjects:', error);
  }
);
  }

  
  newPass() {
    if (this.passwordForm.valid) {
      this.apiService.updateLearnerPassword(this.passwordForm.value, this.storeduser).subscribe(
        (result: any) => {
          if (result && result.message === 'Password updated successfully') {
            // SweetAlert2 success message
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Password Updated Successfully",
              showConfirmButton: false,
              timer: 1500
            });
            this.passwordForm.reset();
          } else {
            // Handle unexpected response structure
            console.log('Unexpected response:', result);
          }
        },
        (error) => {
          // Handle error response from the server
          if (error.status === 400) {
            Swal.fire({
              position: "center",
              icon: "warning",
              title: "Old password does not match",
              showConfirmButton: false,
              timer: 1500
            });
          } else {
            Swal.fire({
              position: "center",
              icon: "error",
              title: "An error occurred",
              text: "Please try again later",
              showConfirmButton: true,
            });
          }
        }
      );
    } else {
      // Invalid form submission error message
      Swal.fire({
        position: "center",
        icon: "warning",
        title: "Invalid Form",
        text: "Please fill out all fields correctly.",
        showConfirmButton: false,
        timer: 1500
      });
    }
  }

}
