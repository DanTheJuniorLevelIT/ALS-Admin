import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ApiServiceService } from '../../../api-service.service';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-studen-list',
  standalone: true,
  imports: [RouterLink,CommonModule,ReactiveFormsModule,MatButtonModule,MatTooltipModule],
  templateUrl: './studen-list.component.html',
  styleUrl: './studen-list.component.css'
})
export class StudenListComponent implements OnInit{
  idNumber:any
  class:any
  allstud: any[] = [];
  selectedStudentId:any;

  constructor(private apiService: ApiServiceService, private route: Router){}

  ngOnInit(): void {
    const class_id = localStorage.getItem('classID');
    console.log('teacherss',class_id)
    this.idNumber = Number(class_id); 
    console.log('id num',this.idNumber)
    //all
    this.apiService.getRoster(this.idNumber).subscribe((result: any) =>{
      this.allstud = result;
      // this.filterSub();
      console.log('classaalll',this.allstud);
    });

    this.apiService.getClassByID(this.idNumber).subscribe((response) => {
      console.log(response);  
      this.class = response; 
      console.log('Approve student:', this.class);  
    },
    (error) => {
      console.error('Error fetching subjects:', error);
    }
  );
  }

  assignClassForm = new FormGroup({
    studentID: new FormControl(null)  // Initialize with null or appropriate default
  });

  

fetchID(){
  const class_id = localStorage.getItem('classID');
  console.log('teacherss',class_id)
  this.idNumber = Number(class_id); 
  console.log('id num',this.idNumber)
  //all
  this.apiService.getRoster(this.idNumber).subscribe((result: any) =>{
    this.allstud = result;
   
    console.log('classaalll',this.allstud);
  });
}


DeleteStudent(rosterid: number) {
  console.log('rosster',rosterid)
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
      this.apiService.deleteRoster(rosterid).subscribe({
        next: (response) => {
          Swal.fire(
            'Deleted!',
            'The student has been deleted successfully.',
            'success'
          );
          // Optional: Refresh the student list
          this.fetchID();
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
