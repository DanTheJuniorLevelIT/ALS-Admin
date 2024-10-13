import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ApiServiceService } from '../../../api-service.service';

@Component({
  selector: 'app-assign-class',
  standalone: true,
  imports: [RouterModule,CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './assign-class.component.html',
  styleUrl: './assign-class.component.css'
})
export class AssignClassComponent implements OnInit{

  gvalue: any = ["Male", "Female"];
  gradelevel: any = ["Basic Literacy Program","ALS Elementary","ALS Junior High School"];

  enrollForm = new FormGroup({
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
    
  })

  ngOnInit(): void {
   
  }

  constructor(private apiService: ApiServiceService, private route: Router){}
    
  // enrol(){
  //     console.log(this.enrollForm.value);
  //   }

    enrol() {
      if (this.enrollForm.valid) {
        this.apiService.enrollUser(this.enrollForm.value).subscribe(
          (response) => {
            console.log('User enrolled:', response);  // Inspect response here
            alert('User enrolled successfully!');
            this.enrollForm.reset();
            this.route.navigate(['/main/Home/mainHome/enroll']);
          },
          (error) => {
            console.error('Error enrolling user:', error); // Check the exact error
          }
        );
      } 
    }
    // enrol() {
    //   if (this.enrollForm.valid) {
    //     this.apiService.enrollUser(this.enrollForm.value).subscribe(
    //       (response) => {
    //         console.log('User enrolled:', response);
    //         // Add success message logic here
    //         alert('User enrolled successfully!'); // Simple alert
    //         this.enrollForm.reset(); // Reset the form if needed
    //       },
    //       (error) => {
    //         console.error('Error enrolling user:', error);
    //         alert('Enrollment failed. Please try again.'); // Error message
    //       }
    //     );
    //   } 
    // }
    
    
}

