import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ApiServiceService } from '../../../api-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-teachers',
  standalone: true,
  imports: [RouterModule,CommonModule,ReactiveFormsModule,FormsModule,MatButtonModule,MatTooltipModule],
  templateUrl: './view-teachers.component.html',
  styleUrl: './view-teachers.component.css'
})
export class ViewTeachersComponent implements OnInit{
  teachers : any; 
  teacherid: any;
  allSubjects: any;

  constructor(private apiService: ApiServiceService, private route: Router) {}

  selectedTeacherId: any;

  storeTeacherId(studentid: number) {
    this.selectedTeacherId = studentid;
    console.log('Selected Teacher ID:', this.selectedTeacherId);
    localStorage.setItem('TeacherID', this.selectedTeacherId)
  }

  DeleteTeacher(studentid: number) {
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
        this.apiService.deleteTeacher(studentid).subscribe({
          next: (response) => {
            Swal.fire(
              'Deleted!',
              'The student has been deleted successfully.',
              'success'
            );
            // Optional: Refresh the student list
            this.fetchteacher();
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

  fetchteacher(){
    this.apiService.getData().subscribe((response) => {
      console.log(response);  
      this.teachers = response; 
      console.log('teacher:', this.teachers);  
    },
    (error) => {
      console.error('Error fetching subjects:', error);
    }
  );
  }

 
  ngOnInit(): void {
    this.apiService.getData().subscribe((response) => {
        console.log(response);  
        this.teachers = response; 
        console.log('teacher:', this.teachers);  
      },
      (error) => {
        console.error('Error fetching subjects:', error);
      }
    );
  }
}

