import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ApiServiceService } from '../../../api-service.service';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../../../search.pipe';

@Component({
  selector: 'app-als-junior',
  standalone: true,
  imports: [RouterModule,CommonModule,SearchPipe,FormsModule],
  templateUrl: './als-junior.component.html',
  styleUrl: './als-junior.component.css'
})
export class AlsJuniorComponent implements OnInit{
  keyword: any;
  classJunior:any;

  constructor(private apiService: ApiServiceService, private route: Router){}

  ngOnInit(): void {
      
    this.apiService.getClassJunior().subscribe((response) => {
      console.log(response);  
      this.classJunior = response; 
      console.log('Approve student:', this.classJunior);  
    },
    (error) => {
      console.error('Error fetching subjects:', error);
    }
  );
}

}
