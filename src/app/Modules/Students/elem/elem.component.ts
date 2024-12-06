import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ApiServiceService } from '../../../api-service.service';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-elem',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './elem.component.html',
  styleUrl: './elem.component.css'
})
export class ElemComponent implements OnInit{
  approveStudentELEM:any;


  selectedStudentId: any;

  storeStudentId(studentid: number) {
    this.selectedStudentId = studentid;
    console.log('Selected Student ID:', this.selectedStudentId);
    localStorage.setItem('StudentID', this.selectedStudentId)
  }

  constructor(private apiService: ApiServiceService, private route: Router){}

  ngOnInit(): void {
    this.apiService.getApproveStudentELEM().subscribe((response) => {
        console.log(response);  
        this.approveStudentELEM = response; 
        console.log('pending student:', this.approveStudentELEM);  
      },
      (error) => {
        console.error('Error fetching subjects:', error);
      }
    );
  }
  fetchstudent(){
    this.apiService.getApproveStudentELEM().subscribe((response) => {
      console.log(response);  
      this.approveStudentELEM = response; 
      console.log('pending student:', this.approveStudentELEM);  
    },
    (error) => {
      console.error('Error fetching subjects:', error);
    }
  );
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
            this.fetchstudent();
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
