import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ApiServiceService } from '../../../api-service.service';

@Component({
  selector: 'app-junior',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './junior.component.html',
  styleUrl: './junior.component.css'
})
export class JuniorComponent implements OnInit{
  approveStudentJunior:any;

  selectedStudentId: any;

  storeStudentId(studentid: number) {
    this.selectedStudentId = studentid;
    console.log('Selected Student ID:', this.selectedStudentId);
    localStorage.setItem('StudentID', this.selectedStudentId)
  }

  constructor(private apiService: ApiServiceService, private route: Router){}

 ngOnInit(): void {
    this.apiService.getApproveStudentJUNIOR().subscribe((response) => {
        console.log(response);  
        this.approveStudentJunior = response; 
        console.log('pending student:', this.approveStudentJunior);  
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
