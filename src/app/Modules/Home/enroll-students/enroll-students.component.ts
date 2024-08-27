import { Component, OnInit } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import {RouterModule, RouterOutlet } from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
export interface TabItem{
  label: string;
  icon: string;
  route: string;
}
@Component({
  selector: 'app-enroll-students',
  standalone: true,
  imports: [RouterModule, 
    MatToolbar,
    MatTabsModule,
    MatIconModule, RouterOutlet,],
  templateUrl: './enroll-students.component.html',
  styleUrl: './enroll-students.component.css'
})
export class EnrollStudentsComponent implements OnInit{

  tabs: TabItem[] = [
    {
      label: 'Basic Literacy Program',
      icon: 'person',
      route: 'blp'
    },
    {
      label: 'ALS Elementary',
      icon: 'person',
      route: 'alsElem'
    },
    {
      label: 'Als Junior High School',
      icon: 'person',
      route: 'alsJunior'
    },
  ]
  ngOnInit(): void {
    
  }

}
