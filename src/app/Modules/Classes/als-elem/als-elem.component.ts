import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ApiServiceService } from '../../../api-service.service';
import { SearchPipe } from '../../../search.pipe';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-als-elem',
  standalone: true,
  imports: [RouterModule,CommonModule,SearchPipe,FormsModule,ReactiveFormsModule],
  templateUrl: './als-elem.component.html',
  styleUrl: './als-elem.component.css'
})
export class AlsElemComponent implements OnInit{
  classElem:any;
  keyword: any;
  approveStudentELEM:any;
  selectedClassId:any;

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

  //   this.apiService.getApproveStudentELEM().subscribe((response) => {
  //     console.log(response);  
  //     this.approveStudentELEM = response; 
  //     console.log('pending student:', this.approveStudentELEM);  
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

  // openModal(pendingStudent: any) {
  //   this.selectedStudent = pendingStudent;
  //   console.log(this.selectedStudent);
  //   this.isModalOpen = true;
  // }
  openModal(classid: number) {
    this.selectedClassId = classid;  // Store selected class ID
    this.isModalOpen = true;
    this.apiService.showStudentAlsElem(classid).subscribe(
        (response) => {
            console.log(response);  
            this.approveStudentELEM = response;  
            console.log('Approve student:', this.approveStudentELEM);  
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
