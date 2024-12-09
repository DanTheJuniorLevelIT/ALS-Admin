import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../../api-service.service';
import { Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
interface Program {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-view-reports',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, MatInputModule,CommonModule,ReactiveFormsModule,FormsModule,RouterLink],
  templateUrl: './view-reports.component.html',
  styleUrl: './view-reports.component.css'
})
export class ViewReportsComponent implements OnInit{
location:any;

  constructor(private apiService: ApiServiceService, private route: Router) {}

  ngOnInit(): void {
    this.apiService.getlocation().subscribe(
      (response) => {
        console.log('API Response (locations):', response);
        this.location = response;
      },
      (error) => {
        console.error('Error fetching locations:', error);
      }
    );

    this.apiService.getAllRoster().subscribe(
      (response) => {
        console.log('API Response (students):', response);
        this.allStudent = response;
      },
      (error) => {
        console.error('Error fetching locations:', error);
      }
    );
  }
  filteredStudents() {
    return this.allStudent.filter(student => {
      const programMatch = this.selectedProgram ? student.program === this.selectedProgram : true;
      const locationMatch = this.selectedLocation ? student.location === this.selectedLocation : true;
      return programMatch && locationMatch;
    });
  }
  allStudent: any[] = []; 
  selectedProgram: any;
  selectedLocation:any;

  foods: Program[] = [
    {value: 'Basic Literacy Program', viewValue: 'Basic Literacy Program'},
    {value: 'ALS Elementary', viewValue: 'ALS Elementary'},
    {value: 'ALS Junior High School', viewValue: 'ALS Junior High School'},
  ];

  calculateAge(birthdate: string | Date): number {
    const today = new Date();
    const birthDate = new Date(birthdate);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    // If the birthdate hasn't occurred yet this year, subtract 1 from the age
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  selectedStudentId: any;

  storeStudentId(studentid: number) {
    this.selectedStudentId = studentid;
    console.log('Selected Student ID:', this.selectedStudentId);
    localStorage.setItem('StudentID', this.selectedStudentId)
  }

  DeleteStudent(studentid: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you really want to delete this student? This action cannot be undone.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        this.apiService.deleteStudent(studentid).subscribe({
          next: (response) => {
            Swal.fire(
              'Deleted!',
              'The student has been deleted successfully.',
              'success'
            );
            // Optional: Refresh the student list
            // this.fetchstudent();
          },
          error: (err) => {
            console.error('Error deleting student:', err);
            Swal.fire(
              'Failed!',
              'Failed to delete the student. Please try again.',
              'error'
            );
          },
        });
      }
    });
  }
}
