import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ApiServiceService } from '../../../api-service.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchPipe } from '../../../search.pipe';

@Component({
  selector: 'app-als-junior',
  standalone: true,
  imports: [RouterModule,CommonModule,SearchPipe,FormsModule,ReactiveFormsModule],
  templateUrl: './als-junior.component.html',
  styleUrl: './als-junior.component.css'
})
export class AlsJuniorComponent implements OnInit{
  keyword: any;
  classJunior:any;
  approveStudentJunior:any;

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

  this.apiService.getApproveStudentJUNIOR().subscribe((response) => {
    console.log(response);  
    this.approveStudentJunior = response; 
    console.log('pending student:', this.approveStudentJunior);  
  },
  (error) => {
    console.error('Error fetching subjects:', error);
  }
);
}
assignClassForm = new FormGroup({
  studentID: new FormControl(null)  // Initialize with null or appropriate default
});

selectedStudent:any;
isModalOpen = false;

openModal(pendingStudent: any) {
  this.selectedStudent = pendingStudent;
  console.log('classs',this.selectedStudent);
  this.isModalOpen = true;
}

closeModal() {
  this.isModalOpen = false;
}


approveModal(selectedStudent: number) {
  selectedStudent
  const formValues = this.assignClassForm.value;
    
    const formData = {
      lrn: formValues.studentID,
      classid:selectedStudent.toString()
    };
  
    console.log('Final Form Data to Save:', formData);
   
    
    // Use the merged formData object for the API call
    this.apiService.addRoster(formData).subscribe(
      (response) => {
        console.log('User enrolled:', response);  // Inspect response here
        alert('Approved successfully!');
        this.assignClassForm.reset();
        this.closeModal();
        // this.fetchPendingStudents(); // Refresh the list if necessary
      },
      (error) => {
        console.error('Error approving user:', error); // Check the exact error
      }
    );
  }
}



