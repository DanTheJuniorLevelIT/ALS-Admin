import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ApiServiceService } from '../../../api-service.service';
import { CommonModule } from '@angular/common';

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
