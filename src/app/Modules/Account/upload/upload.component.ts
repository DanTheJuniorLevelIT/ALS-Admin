import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ApiServiceService } from '../../../api-service.service';

@Component({
  selector: 'app-upload',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './upload.component.html',
  styleUrl: './upload.component.css'
})
export class UploadComponent implements OnInit{
  constructor(private apiService: ApiServiceService, private route: Router){}

  ngOnInit(): void {
    
  }
selectedFile:any;
adminId:any;

onFileSelected(event: any) {
  const file = event.target.files[0];  // Corrected `file[0]` to `files[0]`
  if (file) {
    this.selectedFile = file;
    console.log(this.selectedFile);
  }
}

onUpload() {
  const adminId = localStorage.getItem('uploadID');
  console.log(adminId)
  if (this.selectedFile) {
    this.apiService.uploadFile(adminId, this.selectedFile).subscribe(
      (response) => {
        console.log('File uploaded successfully:', response);
        alert('File uploaded successfully');
         this.route.navigate(['/main/Account/mainAccount/accountInfo']);
        //  window.location.reload();
         
      },
      (error) => {
        console.error('Error uploading file:', error);
        alert('Error uploading file');
      }
    );
  } else {
    alert('No file selected. Please choose a file to upload.');
  }
}
}
