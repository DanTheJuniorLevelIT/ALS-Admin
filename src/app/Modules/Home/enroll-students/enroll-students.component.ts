import { Component, OnInit } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import {Router, RouterModule, RouterOutlet } from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { ApiServiceService } from '../../../api-service.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Console } from 'console';
import Swal from 'sweetalert2';

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
storeduserID:any;
stuidddd:any;

assignClassForm = new FormGroup({
  program: new FormControl(null)  // Initialize with null or appropriate default
});

openModal(pendingStudent: any) {
  this.selectedStudent = pendingStudent;
  console.log(this.selectedStudent);
  localStorage.setItem('studIDDD', this.selectedStudent)
  this.isModalOpen = true;
  this.fetchPendingStudnetName();
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


fetchPendingStudnetName() {
  this.storeduserID = localStorage.getItem('studIDDD');
    console.log(this.storeduserID);
  
  this.apiService.getPendingStudentName(this.storeduserID).subscribe((response:any) => {
    console.log(response);  
    this.stuidddd = response; 
    console.log('Admin:', this.stuidddd);  
  },
  (error) => {
    console.error('Error fetching subjects:', error);
  }
);
}
approveModal(selectedStudent: number) {
  if (this.assignClassForm.valid) {
    this.apiService.updateStudent(selectedStudent, this.assignClassForm.value).subscribe(
      (response) => {
        console.log('User enrolled:', response);

        // SweetAlert for success
        Swal.fire({
          icon: 'success',
          title: 'Approved Successfully',
          text: 'The student has been approved and assigned to the class!',
          confirmButtonColor: '#3085d6',
        }).then(() => {
          this.assignClassForm.reset();
          this.closeModal();
          this.fetchPendingStudents(); // Refresh the list of pending students
        });
      },
      (error) => {
        console.error('Error approving user:', error);

        // SweetAlert for error
        Swal.fire({
          icon: 'error',
          title: 'Approval Failed',
          text: 'There was an error approving the student. Please try again.',
          confirmButtonColor: '#d33',
        });
      }
    );
  } else {
    // SweetAlert for invalid form
    Swal.fire({
      icon: 'warning',
      title: 'Invalid Form',
      text: 'Please fill out all required fields before approving the student.',
      confirmButtonColor: '#f39c12',
    });
  }
}

  constructor(private apiService: ApiServiceService, private route: Router){}

  ngOnInit(): void {
    this.fetchPendingStudents();
    
    this.apiService.getPendingStudent().subscribe(
      (response) => {
        console.log(response);  
        this.pendingStudent = response.reverse();  // Reverse the array to show the last inserted first
        console.log('pending student:', this.pendingStudent);  
      },
      (error) => {
        console.error('Error fetching subjects:', error);
      }
    );

    this.storeduserID = localStorage.getItem('studIDDD');
    console.log(this.storeduserID);
  
      this.apiService.getPendingStudentName(this.storeduserID).subscribe((response:any) => {
        console.log(response);  
        this.stuidddd = response; 
        console.log('Admin:', this.stuidddd);  
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