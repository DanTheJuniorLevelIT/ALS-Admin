import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ApiServiceService } from '../../../api-service.service';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-alsblp',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './alsblp.component.html',
  styleUrl: './alsblp.component.css'
})
export class AlsblpComponent implements OnInit{
  approveStudentBLP:any;

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
  
  constructor(private apiService: ApiServiceService, private route: Router){}

 ngOnInit(): void {
    this.apiService.getApproveStudentBLP().subscribe((response) => {
        console.log(response);  
        this.approveStudentBLP = response; 
        console.log('Approve student:', this.approveStudentBLP);  
      },
      (error) => {
        console.error('Error fetching subjects:', error);
      }
    );

  }
fetchstudent(){
  this.apiService.getApproveStudentBLP().subscribe((response) => {
    console.log(response);  
    this.approveStudentBLP = response; 
    console.log('Approve student:', this.approveStudentBLP);  
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
