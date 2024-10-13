import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../../api-service.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-teacher-subjects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './teacher-subjects.component.html',
  styleUrl: './teacher-subjects.component.css'
})
export class TeacherSubjectsComponent implements OnInit{
  idNumber:any;
  classesblp:any;
  classesElem:any;
  classesJunior:any;
  allsubs:any;

  constructor(private apiService: ApiServiceService, private route: Router){}

  ngOnInit(): void {
    const teacher_id = localStorage.getItem('TeacherID');
    console.log('teacherss',teacher_id)
    this.idNumber = Number(teacher_id); 
    console.log('id num',this.idNumber)
    //all
    this.apiService.getAllTeacherClass(this.idNumber).subscribe((result: any) =>{
      this.allsubs = result;
      this.filterSub();
      console.log('classaalll',this.allsubs);
    })
  }

  filterSub(){
    this.classesblp = this.allsubs.filter((sub:{Program: string})=> sub.Program == 'Basic Literacy Program')
    this.classesElem = this.allsubs.filter((sub:{Program: string})=> sub.Program == 'ALS Elementary')
    this.classesJunior = this.allsubs.filter((sub:{Program: string})=> sub.Program == 'ALS Junior High School')
  }

}
