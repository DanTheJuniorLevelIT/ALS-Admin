import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatToolbar } from '@angular/material/toolbar';
import { RouterOutlet } from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
export interface TabItem{
  label: string;
  icon: string;
  route: string;
}
@Component({
  selector: 'app-view-students',
  standalone: true,
  imports: [RouterModule, 
    MatToolbar,
    MatTabsModule,
    MatIconModule, RouterOutlet,],
  templateUrl: './view-students.component.html',
  styleUrl: './view-students.component.css'
})
export class ViewStudentsComponent implements OnInit{

  tabs: TabItem[] = [
    {
      label: 'Basic Literacy Program',
      icon: 'person',
      route: 'alsblp'
    },
    {
      label: 'ALS Elementary',
      icon: 'person',
      route: 'elem'
    },
    {
      label: 'Als Junior High School',
      icon: 'person',
      route: 'junior'
    },
  ]
  ngOnInit(): void {
    
  }

}
