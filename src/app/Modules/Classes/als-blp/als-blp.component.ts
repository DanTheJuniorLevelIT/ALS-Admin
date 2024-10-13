import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../../api-service.service';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../../../search.pipe';  // Correct path to the pipe
@Component({
  selector: 'app-als-blp',
  standalone: true,
  imports: [CommonModule,RouterLink,FormsModule,SearchPipe,],
  templateUrl: './als-blp.component.html',
  styleUrl: './als-blp.component.css'
})
export class AlsBlpComponent implements OnInit{
  keyword: any;
  classBLS:any;

  constructor(private apiService: ApiServiceService, private route: Router){}

  ngOnInit(): void {
    this.apiService.getClassBLP().subscribe((response) => {
      console.log(response);  
      this.classBLS = response; 
      console.log('Approve student:', this.classBLS);  
    },
    (error) => {
      console.error('Error fetching subjects:', error);
    }
  );
  }

}
