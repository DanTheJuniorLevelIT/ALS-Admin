import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ApiServiceService } from '../../../api-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-view-teachers',
  standalone: true,
  imports: [RouterModule,CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './view-teachers.component.html',
  styleUrl: './view-teachers.component.css'
})
export class ViewTeachersComponent implements OnInit{
  teachers : any; 
  teacherid: any;
  allSubjects: any;

  constructor(private apiService: ApiServiceService, private route: Router) {}

 
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

