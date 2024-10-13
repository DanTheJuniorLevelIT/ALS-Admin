import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ApiServiceService } from '../../../api-service.service';
import { SearchPipe } from '../../../search.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-als-elem',
  standalone: true,
  imports: [RouterModule,CommonModule,SearchPipe,FormsModule],
  templateUrl: './als-elem.component.html',
  styleUrl: './als-elem.component.css'
})
export class AlsElemComponent implements OnInit{
  classElem:any;
  keyword: any;

  constructor(private apiService: ApiServiceService, private route: Router){}

  ngOnInit(): void {
    this.apiService.getClassElem().subscribe((response) => {
        console.log(response);  
        this.classElem = response; 
        console.log('Approve student:', this.classElem);  
      },
      (error) => {
        console.error('Error fetching subjects:', error);
      }
    );
  }

}
