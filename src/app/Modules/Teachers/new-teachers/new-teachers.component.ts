import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ApiServiceService } from '../../../api-service.service';

@Component({
  selector: 'app-new-teachers',
  standalone: true,
  imports: [RouterModule,CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './new-teachers.component.html',
  styleUrl: './new-teachers.component.css'
})
export class NewTeachersComponent implements OnInit{

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

  // new(){
  //       console.log(this.newTeacherForm.value);
  //     }

  new() {
    if (this.newTeacherForm.valid) {
      this.apiService.newTeacher(this.newTeacherForm.value).subscribe(
        (response) => {
          console.log('User enrolled:', response);  // Inspect response here
          alert('User enrolled successfully!');
          this.newTeacherForm.reset();
          this.route.navigate(['/main/Teacher/mainTeacher/viewTeacher']);
        },
        (error) => {
          console.error('Error enrolling user:', error); // Check the exact error
        }
      );
    } 
  }

}
