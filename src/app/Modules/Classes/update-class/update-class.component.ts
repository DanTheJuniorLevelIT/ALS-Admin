import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiServiceService } from '../../../api-service.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-class',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule,RouterModule,CommonModule],
  templateUrl: './update-class.component.html',
  styleUrl: './update-class.component.css'
})
export class UpdateClassComponent implements OnInit{
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
  student:any;
  idNumber: any;

  constructor(private apiService: ApiServiceService, private route: Router) {}

  gradelevel: any = ["Basic Literacy Program", "ALS Elementary", "ALS Junior High School"];
  sched: any = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  time: any = ["7:00 - 8:00 AM","8:00 - 9:00 AM", "9:00 - 10:00 AM" ,"10:00 - 11:00 AM","11:00 - 12:00 AM", "12:00 - 1:00 PM", "1:00 - 2:00 PM","2:00 - 3:00 PM","3:00 - 4:00 PM","4:00 - 5:00 PM" ,"5:00 - 6:00 PM"];
  
  classForm = new FormGroup({
    gradeLevel: new FormControl(null),
    subject: new FormControl(null),
    teacher: new FormControl(null),
    Sched: new FormControl(null),
    time: new FormControl(null),
    location: new FormControl(null),
  });

  ngOnInit(): void {

    //getClassByID
    const class_id = localStorage.getItem('classID');
    console.log('teacherss',class_id)
    this.idNumber = Number(class_id); 
    console.log('id num',this.idNumber)
    this.apiService.getClassByID(this.idNumber).subscribe((result: any) =>{
      this.student = result;
      console.log(result);
      this.classForm.controls['gradeLevel'].setValue(this.student[0].program);
      this.classForm.controls['subject'].setValue(this.student[0].subject_name);
      this.classForm.controls['teacher'].setValue(this.student[0].adminid);
      this.classForm.controls['Sched'].setValue(this.student[0].day);
      this.classForm.controls['time'].setValue(this.student[0].time);
      // this.classForm.controls['Etime'].setValue(this.student[0].Etime); 
      this.classForm.controls['location'].setValue(this.student[0].location);

    })


    
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
      subject: formValues.subject, // Assuming this is already a string
      teacher: formValues.teacher,
      location: formValues.location, // Assuming this is already a string
      combinedSchedule: `${formValues.Sched} ${formValues.time}`, // Ensure `time` exists in the form
    };
  
    console.log('Final Form Data to Save:', formData);
  
    const classID = localStorage.getItem('classID');
    // if (!classID) {
    //   console.error('No class ID found in localStorage.');
    //   Swal.fire({
    //     icon: 'error',
    //     title: 'Missing Class ID',
    //     text: 'Please select a class to update.',
    //     confirmButtonColor: '#d33',
    //   });
    //   return;
    // }
  
    const idNumber = Number(classID);
    console.log('Class ID:', idNumber);
  
    this.apiService.updateClassINFO(idNumber, formData).subscribe(
      (response) => {
        console.log('Class saved:', response);
  
        Swal.fire({
          icon: 'success',
          title: 'Class Saved',
          text: 'The class has been saved successfully!',
          confirmButtonColor: '#3085d6',
        }).then(() => {
          this.classForm.reset();
          this.route.navigate(['/main/Class/mainClass/viewClass/junior']);
        });
      },
      (error) => {
        console.error('Error saving class:', error);
  
        if (error.status === 409) {
          Swal.fire({
            icon: 'error',
            title: 'Duplicate Entry',
            text: 'The class data you entered already exists. Please try again with different values.',
            confirmButtonColor: '#d33',
          }).then(() => {
            this.classForm.reset();
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Save Failed',
            text: 'An error occurred while saving the class. Please try again.',
            confirmButtonColor: '#d33',
          });
        }
      }
    );
  }
  

}
