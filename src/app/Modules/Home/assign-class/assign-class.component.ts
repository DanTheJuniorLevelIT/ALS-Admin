import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ApiServiceService } from '../../../api-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-assign-class',
  standalone: true,
  imports: [RouterModule,CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './assign-class.component.html',
  styleUrl: './assign-class.component.css'
})
export class AssignClassComponent implements OnInit{
  showPassword = false;

  gvalue: any = ["Male", "Female"];
  gradelevel: any = ["Basic Literacy Program","ALS Elementary","ALS Junior High School"];
  civil: any = ["Single","Married","Divorced","Separated","Widowed"];
  sy: any = ["2024-2025","2025-2026","2026-2027","2027-2028","2029-2030"];

  enrollForm = new FormGroup({
    lrn: new FormControl(null),
    school_year: new FormControl(null),
    lastname: new FormControl(null),
    firstname: new FormControl(null),
    middlename: new FormControl(null),
    extension_name: new FormControl(null),
    religion: new FormControl(null),
    birthdate: new FormControl(null),
    placeofbirth: new FormControl(null),
    contact_numbers: new FormControl(null),
    gender: new FormControl(null),
    civil_status: new FormControl(null),
    last_education: new FormControl(null),
    program: new FormControl(null),
    email: new FormControl(null),
    password: new FormControl(null),
    password_confirmation: new FormControl(null),
    
  })

  ngOnInit(): void {
   
  }

 

  togglePasswordVisibility(): void {
      this.showPassword = !this.showPassword;
  }


  constructor(private apiService: ApiServiceService, private route: Router){}

  approveStud(){
    if (this.enrollForm.valid) {
      this.apiService.enrollstud(this.enrollForm.value).subscribe(
        (response) => {
          console.log('User enrolled:', response); // Inspect response here
        }
      )}
  }
    

  enrol() {
    console.log(this.enrollForm.value);
    if (this.enrollForm.valid) {
      this.apiService.enrollUser(this.enrollForm.value).subscribe(
        (response) => {
          console.log('User enrolled:', response); // Inspect response here
  
          // SweetAlert2 for success
          Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: 'User enrolled successfully!',
            confirmButtonColor: '#3085d6',
          }).then(() => {
            this.approveStud();
            this.enrollForm.reset();
            this.route.navigate(['/main/Home/mainHome/enroll']);
          });
        },
        (error) => {
          console.error('Error enrolling user:', error);
  
          if (error.status === 409) {
            // SweetAlert2 for duplicate entry error
            Swal.fire({
              icon: 'error',
              title: 'Duplicate Entry',
              text: 'The user is already enrolled. Please check the details.',
              confirmButtonColor: '#d33',
            }).then(() => {
              this.enrollForm.reset();
            });
          } else {
            // SweetAlert2 for general error
            Swal.fire({
              icon: 'error',
              title: 'Enrollment Failed',
              text: 'There was an error enrolling the user. Please try again.',
              confirmButtonColor: '#d33',
            });
          }
        }
      );
    } else {
      // SweetAlert2 for invalid form
      Swal.fire({
        icon: 'warning',
        title: 'Invalid Form',
        text: 'Please fill out all required fields correctly.',
        confirmButtonColor: '#f39c12',
      });
    }
  }
  

}

