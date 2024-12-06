import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiServiceService } from '../../../api-service.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-roster',
  standalone: true,
  imports: [RouterModule, CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './update-roster.component.html',
  styleUrl: './update-roster.component.css'
})
export class UpdateRosterComponent implements OnInit{

  teachers: any;
  blp: any;
  elem: any;
  Junior: any;
  location: any;
  subjects: any[] = [];

  classesblp:any;
  classesElem:any;
  classesJunior:any;
  sub:any;

  constructor(private apiService: ApiServiceService, private route: Router) {}
  ngOnInit(): void {
    this.apiService.getTeacherName().subscribe(
      (response) => {
        console.log('API Response (teachers):', response);
        this.teachers = response;
      },
      (error) => {
        console.error('Error fetching teachers:', error);
      }
    );
    // Fetch locations
    this.apiService.getlocation().subscribe(
      (response) => {
        console.log('API Response (locations):', response);
        this.location = response;
      },
      (error) => {
        console.error('Error fetching locations:', error);
      }
    );
//alll
   // Listen to gradeLevel changes to load respective subjects
    this.classForm.get('gradeLevel')?.valueChanges.subscribe((selectedGradeLevel) => {
      if (selectedGradeLevel === 'Basic Literacy Program') {
        this.apiService.getSubjectBLP().subscribe(
          (response) => {
            console.log('Subjects for BLP:', response);
            this.subjects = response;
          },
          (error) => {
            console.error('Error fetching BLP subjects:', error);
          }
        );
      } else if (selectedGradeLevel === 'ALS Elementary') {
        this.apiService.getSubjectElem().subscribe(
          (response) => {
            console.log('Subjects for Elementary:', response);
            this.subjects = response;
          },
          (error) => {
            console.error('Error fetching Elementary subjects:', error);
          }
        );
      } else if (selectedGradeLevel === 'ALS Junior High School') {
        this.apiService.getSubjectJunior().subscribe(
          (response) => {
            console.log('Subjects for Junior High School:', response);
            this.subjects = response;
          },
          (error) => {
            console.error('Error fetching Junior High subjects:', error);
          }
        );
      }
    });

  }
  gradelevel: any = ["Basic Literacy Program", "ALS Elementary", "ALS Junior High School"];
  sched: any = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  
  classForm = new FormGroup({
    gradeLevel: new FormControl(null),
    subject: new FormControl(null),
    teacher: new FormControl(null),
    Sched: new FormControl(null),
    Stime: new FormControl(null),
    Etime: new FormControl(null),
    location: new FormControl(null),
  });

  save(){

  }
}
