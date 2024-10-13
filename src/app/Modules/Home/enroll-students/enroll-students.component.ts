import { Component, OnInit } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import {Router, RouterModule, RouterOutlet } from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { ApiServiceService } from '../../../api-service.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Console } from 'console';

export interface TabItem{
  label: string;
  icon: string;
  route: string;
}
@Component({
  selector: 'app-enroll-students',
  standalone: true,
  imports: [RouterModule,CommonModule,
    MatToolbar,
    MatTabsModule,
    MatIconModule, RouterOutlet, ReactiveFormsModule,],
  templateUrl: './enroll-students.component.html',
  styleUrl: './enroll-students.component.css'
})
export class EnrollStudentsComponent implements OnInit{

gradelevel: any = ["Basic Literacy Program","ALS Elementary","ALS Junior High School"];
pendingStudent:any;
isModalOpen = false;
selectedStudentId: any;
selectedStudent:any;
pendingStudentId!: number;

assignClassForm = new FormGroup({
  education: new FormControl(null)  // Initialize with null or appropriate default
});

openModal(pendingStudent: any) {
  this.selectedStudent = pendingStudent;
  console.log(this.selectedStudent);
  this.isModalOpen = true;
}

  closeModal() {
    this.isModalOpen = false;
  }

  fetchPendingStudents() {
    this.apiService.getPendingStudent().subscribe(
        (response) => {
            this.pendingStudent = response;
        },
        (error) => {
            console.error('Error fetching pending students:', error);
        }
    );
}
approveModal(selectedStudent: number){
  if (this.assignClassForm.valid) {
    this.apiService.updateStudent(selectedStudent ,this.assignClassForm.value).subscribe(
      (response) => {
        console.log('User enrolled:', response);  // Inspect response here
        alert('Approve successfully!');
        this.assignClassForm.reset();
        this.closeModal() 
        this.fetchPendingStudents(); // Refresh the list
      },
      (error) => {
        console.error('Error Approve user:', error); // Check the exact error
      }
    );
  } 
}

  constructor(private apiService: ApiServiceService, private route: Router){}

  ngOnInit(): void {
    this.fetchPendingStudents();
    this.apiService.getPendingStudent().subscribe((response) => {
        console.log(response);  
        this.pendingStudent = response; 
        console.log('pending student:', this.pendingStudent);  
      },
      (error) => {
        console.error('Error fetching subjects:', error);
      }
    );
  }


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

}