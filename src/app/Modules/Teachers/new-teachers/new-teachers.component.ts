import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ApiServiceService } from '../../../api-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-teachers',
  standalone: true,
  imports: [RouterModule,CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './new-teachers.component.html',
  styleUrl: './new-teachers.component.css'
})
export class NewTeachersComponent implements OnInit{
  showPassword = false;

  ngOnInit(): void {
    
  }

  gvalue: any = ["Male", "Female"];
  newTeacherForm = new FormGroup({
    lastname: new FormControl(null),
    firstname: new FormControl(null),
    middlename: new FormControl(null),
    birthdate: new FormControl(null),
    gender: new FormControl(null),
    address: new FormControl(null),
    role: new FormControl("Teacher"),
    mobile_number: new FormControl(null),
    email: new FormControl(null),
    password: new FormControl(null),
    password_confirmation: new FormControl(null),
  })

  constructor(private apiService: ApiServiceService, private route: Router){}

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
}



  new() {
    // Check if the form is valid
    if (this.newTeacherForm.valid) {
      // Call the API to enroll the teacher
      this.apiService.newTeacher(this.newTeacherForm.value).subscribe(
        (response) => {
          console.log('User enrolled:', response);
  
          // SweetAlert for success
          Swal.fire({
            icon: 'success',
            title: 'Teacher Added',
            text: 'The new teacher has been successfully enrolled!',
            confirmButtonColor: '#3085d6',
          }).then(() => {
            this.route.navigate(['/main/Teacher/mainTeacher/viewTeacher']);
          });
        },
        (error) => {
          console.error('Error enrolling user:', error);
  
          // SweetAlert for error
          Swal.fire({
            icon: 'error',
            title: 'Enrollment Failed',
            text: 'There was an error enrolling the teacher. Please try again.',
            confirmButtonColor: '#d33',
          });
        }
      );
    } else {
      // Mark all fields as touched to show validation errors
      this.newTeacherForm.markAllAsTouched();
  
      // SweetAlert for invalid form
      Swal.fire({
        icon: 'warning',
        title: 'Invalid Form',
        text: 'Please fill out all required fields correctly before submitting.',
        confirmButtonColor: '#f39c12',
      });
    }
  }
  

}
