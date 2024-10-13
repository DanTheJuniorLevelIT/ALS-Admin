import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbar } from '@angular/material/toolbar';
import { RouterModule, RouterOutlet } from '@angular/router';
import { SearchPipe } from '../../../search.pipe';
import { FormsModule } from '@angular/forms';
export interface TabItem{
  label: string;
  icon: string;
  route: string;
}

@Component({
  selector: 'app-view-classes',
  standalone: true,
  imports: [RouterModule,RouterModule, 
    MatToolbar,
    MatTabsModule,
    MatIconModule, RouterOutlet,SearchPipe, FormsModule],
  templateUrl: './view-classes.component.html',
  styleUrl: './view-classes.component.css'
})
export class ViewClassesComponent implements OnInit{
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
