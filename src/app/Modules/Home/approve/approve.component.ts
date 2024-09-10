import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbar } from '@angular/material/toolbar';
import { RouterModule, RouterOutlet } from '@angular/router';
export interface TabItem{
  label: string;
  icon: string;
  route: string;
}

@Component({
  selector: 'app-approve',
  standalone: true,
  imports: [RouterModule, 
    MatToolbar,
    MatTabsModule,
    MatIconModule, RouterOutlet,],
  templateUrl: './approve.component.html',
  styleUrl: './approve.component.css'
})


export class ApproveComponent implements OnInit{
  tabs: TabItem[] = [
    {
      label: 'Basic Literacy Program',
      icon: 'person',
      route: 'blpApprove'
    },
    {
      label: 'ALS Elementary',
      icon: 'person',
      route: 'alsElemApprove'
    },
    {
      label: 'Als Junior High School',
      icon: 'person',
      route: 'alsJuniorApprove'
    },
  ]
    
  ngOnInit(): void {
    
  }

}
