import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from "../dashboard/dashboard.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterModule, DashboardComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
