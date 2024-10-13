import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../../api-service.service';
import { Router, RouterModule } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-updaterecord-student',
  standalone: true,
  imports: [RouterModule,CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './updaterecord-student.component.html',
  styleUrl: './updaterecord-student.component.css'
})
export class UpdaterecordStudentComponent implements OnInit{
  student_id = localStorage.getItem('StudentID');
  idNumber: any;

  student:any;

  gvalue: any = ["Male", "Female"];
  gradelevel: any = ["Basic Literacy Program","ALS Elementary","ALS Junior High School"];

  profileForm = new FormGroup({
    lrn: new FormControl(null),
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
    education: new FormControl(null),
    email: new FormControl(null),
    password: new FormControl(null),
    password_confirmation: new FormControl(null),
    });


  ngOnInit(): void {
    const studentId = localStorage.getItem('StudentID');
    console.log(this.student_id)
    this.idNumber = Number(studentId); 
    this.apiService.getlearner(this.idNumber).subscribe((result: any) =>{
      this.student = result;
      console.log(result);
      this.profileForm.controls['lastname'].setValue(this.student[0].lastname);
      this.profileForm.controls['firstname'].setValue(this.student[0].firstname);
      this.profileForm.controls['middlename'].setValue(this.student[0].middlename);
      this.profileForm.controls['extension_name'].setValue(this.student[0].extension_name);
      this.profileForm.controls['religion'].setValue(this.student[0].religion);
      this.profileForm.controls['birthdate'].setValue(this.student[0].birthdate);
      this.profileForm.controls['placeofbirth'].setValue(this.student[0].placeofbirth);
      this.profileForm.controls['contact_numbers'].setValue(this.student[0].contact_numbers);
      this.profileForm.controls['gender'].setValue(this.student[0].gender);
      this.profileForm.controls['civil_status'].setValue(this.student[0].civil_status);
      this.profileForm.controls['education'].setValue(this.student[0].education);
      this.profileForm.controls['email'].setValue(this.student[0].email);
    
    })
  }

  

  constructor(private apiService: ApiServiceService, private route: Router){}

  updateInfo() {
    console.log(this.idNumber);
    if (this.profileForm.valid) {
      this.apiService.updateStudentINFO(this.idNumber, this.profileForm.value).subscribe(
        (response) => {
          console.log('User updated successfully', response);
          this.route.navigate(['/main/Student/mainStudent/viewStudent/alsblp']);
        },
        (error) => {
          console.error('Error updating user', error);
        }
      );
    } else {
      console.error('Form is invalid');
      // Add some error feedback to the user
    }
  }

}
