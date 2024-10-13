import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ApiServiceService } from '../../../api-service.service';
import { CommonModule } from '@angular/common';

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
