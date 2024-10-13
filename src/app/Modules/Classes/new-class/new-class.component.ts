import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ApiServiceService } from '../../../api-service.service';

@Component({
  selector: 'app-new-class',
  standalone: true,
  imports: [RouterModule, CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './new-class.component.html',
  styleUrls: ['./new-class.component.css']  // fixed `styleUrl` typo to `styleUrls`
})
export class NewClassComponent implements OnInit {
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

  ngOnInit(): void {
    // Fetch teachers
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
  



  save() {
    const formValues = this.classForm.value;
    
    const formData = {
      gradeLevel: formValues.gradeLevel,
      subject: formValues.subject,  // Send subject as a string
      teacher: formValues.teacher,
      location: formValues.location,  // Send location as a string
      combinedSchedule: `${formValues.Sched} ${formValues.Stime} - ${formValues.Etime}`, // Combine schedule data
      Sched: formValues.Sched,
      Stime: formValues.Stime,
      Etime: formValues.Etime,
    };
  
    console.log('Final Form Data to Save:', formData);
  
    this.apiService.saveNewclass(formData).subscribe(
      (response) => {
        console.log('Class saved:', response);
        alert('Class saved successfully!');
        this.classForm.reset();
        this.route.navigate(['/main/Class/mainClass/viewClass/junior']);
      },
      (error) => {
        console.error('Error saving class:', error);
      }
    );
  }
  
}
