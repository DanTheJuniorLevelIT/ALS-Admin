import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../../api-service.service';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchPipe } from '../../../search.pipe';  // Correct path to the pipe
@Component({
  selector: 'app-als-blp',
  standalone: true,
  imports: [CommonModule,RouterLink,FormsModule,SearchPipe,ReactiveFormsModule],
  templateUrl: './als-blp.component.html',
  styleUrl: './als-blp.component.css'
})
export class AlsBlpComponent implements OnInit{
  keyword: any;
  classBLS:any;
  approveStudentBLP:any;
  selectedClassId: any;

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
  
//   this.apiService.showStudentBLP().subscribe((response) => {
//     console.log(response);  
//     this.approveStudentBLP = response; 
//     console.log('Approve student:', this.approveStudentBLP);  
//   },
//   (error) => {
//     console.error('Error fetching subjects:', error);
//   }
// );
  }

  assignClassForm = new FormGroup({
    studentID: new FormControl(null)  // Initialize with null or appropriate default
  });
  
  selectedStudent:any;
  isModalOpen = false;

  openModal(classid: number) {
    this.selectedClassId = classid;  // Store selected class ID
    this.isModalOpen = true;
    this.apiService.showStudentBLP(classid).subscribe(
        (response) => {
            console.log(response);  
            this.approveStudentBLP = response;  
            console.log('Approve student:', this.approveStudentBLP);  
        },
        (error) => {
            console.error('Error fetching students:', error);
        }
    );
}

  closeModal() {
    this.isModalOpen = false;
  }

  approveModal() {
    // selectedStudent
    const formValues = this.assignClassForm.value;
      
      const formData = {
        lrn: formValues.studentID,
        // classid:selectedStudent
        classid: this.selectedClassId.toString()
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
