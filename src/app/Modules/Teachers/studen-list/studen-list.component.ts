import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ApiServiceService } from '../../../api-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-studen-list',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './studen-list.component.html',
  styleUrl: './studen-list.component.css'
})
export class StudenListComponent implements OnInit{
  idNumber:any
  allstud:any;
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
    })
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
