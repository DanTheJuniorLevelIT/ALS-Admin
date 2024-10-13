import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ApiServiceService } from '../../../api-service.service';

@Component({
  selector: 'app-account-info',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './account-info.component.html',
  styleUrl: './account-info.component.css'
})
export class AccountInfoComponent implements OnInit{
admin:any;
storeduser:any;
userData: any;
  constructor(private apiService: ApiServiceService, private route: Router) {}

  ngOnInit(): void {
    
  //   this.storeduser = localStorage.getItem('authToken');
  //   console.log(this.storeduser);
    
  //   this.apiService.getAccount().subscribe((response) => {
  //     console.log(response);  
  //     this.admin = response; 
  //     console.log('Admin:', this.admin);  
  //   },
  //   (error) => {
  //     console.error('Error fetching subjects:', error);
  //   }
  // );

  
//   this.apiService.getAccount(this.storeduser).subscribe((response:any) => {
//     console.log(response);  
//     this.admin = response; 
//     console.log('Admin:', this.admin);  
//   },
//   (error) => {
//     console.error('Error fetching subjects:', error);
//   }
// );

  // this.apiService.getAccount(this.storeduser).subscribe(
  //   (data) => {
  //     this.userData = data;
  //     console.log(this.userData);
  //   },
  //   (error) => {
  //     console.error('Error fetching user data', error);
  //   }
  // );
  }

}
