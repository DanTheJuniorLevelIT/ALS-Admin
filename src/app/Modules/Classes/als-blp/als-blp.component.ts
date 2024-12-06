import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../../api-service.service';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchPipe } from '../../../search.pipe';  // Correct path to the pipe
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-als-blp',
  standalone: true,
  imports: [CommonModule,RouterLink,FormsModule,SearchPipe,ReactiveFormsModule,MatTooltipModule,MatButtonModule],
  templateUrl: './als-blp.component.html',
  styleUrl: './als-blp.component.css'
})
export class AlsBlpComponent implements OnInit{
  keyword: any;
  classBLS:any;
  approveStudentBLP:any;
  selectedClassId: any;
  storedclassID:any;
  clasid:any;

  constructor(private apiService: ApiServiceService, private route: Router){}

  ngOnInit(): void {
    this.apiService.getClassBLP().subscribe((response) => {
      console.log(response);  
      this.classBLS = response.reverse();; 
      console.log('Approve student:', this.classBLS);  
    },
    (error) => {
      console.error('Error fetching subjects:', error);
    }
  );

  this.storedclassID = localStorage.getItem('studIDDD');
    console.log(this.storedclassID);
  
    this.apiService.getClassByID(this.storedclassID).subscribe((response:any) => {
      console.log(response);  
      this.clasid = response; 
      console.log('Admin:', this.clasid);  
    },
      (error) => {
      console.error('Error fetching subjects:', error);
      }
    );

  }
  fetchID(){
    this.storedclassID = localStorage.getItem('classID');
    console.log(this.storedclassID);
  
    this.apiService.getClassByID(this.storedclassID).subscribe((response:any) => {
      console.log(response);  
      this.clasid = response; 
      console.log('Admin:', this.clasid);  
    },
      (error) => {
      console.error('Error fetching subjects:', error);
      }
    );
  }
  deleteclass(studentid: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you really want to delete this student? This action cannot be undone.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        this.apiService.deleteClass(studentid).subscribe({
          next: (response) => {
            Swal.fire(
              'Deleted!',
              'The student has been deleted successfully.',
              'success'
            );
            // Optional: Refresh the student list
            this.fetchClass();
          },
          error: (err) => {
            console.error('Error deleting student:', err);
            Swal.fire(
              'Failed!',
              'Failed to delete the student. Please try again.',
              'error'
            );
          },
        });
      }
    });
  }

  fetchClass(){
    this.apiService.getClassBLP().subscribe((response) => {
      console.log(response);  
      this.classBLS = response.reverse();; 
      console.log('Approve student:', this.classBLS);  
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

  openModal(classid: number) {
    this.selectedClassId = classid;  // Store selected class ID
    localStorage.setItem('classID', this.selectedClassId)
    this.isModalOpen = true;
    this.fetchID();
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
storeTeacherId(studentid: number) {
  this.selectedClassId = studentid;
  console.log('Selected Class ID:', this.selectedClassId);
  localStorage.setItem('classID', this.selectedClassId)
}

  closeModal() {
    this.isModalOpen = false;
  }

  approveModal() {
    const formValues = this.assignClassForm.value;
  
    const formData = {
      lrn: formValues.studentID,
      classid: this.selectedClassId.toString(),
    };
  
    console.log('Final Form Data to Save:', formData);
  
    // Use the merged formData object for the API call
    this.apiService.addRoster(formData).subscribe(
      (response) => {
        console.log('User enrolled:', response);
  
        // SweetAlert for success
        Swal.fire({
          icon: 'success',
          title: 'Approval Successful',
          text: 'The student has been successfully approved and added to the class roster!',
          confirmButtonColor: '#3085d6',
        }).then(() => {
          this.assignClassForm.reset();
          this.closeModal();
          // Uncomment this line if necessary
          // this.fetchPendingStudents(); // Refresh the list of pending students
        });
      },
      (error) => {
        console.error('Error approving user:', error);
  
        // SweetAlert for error
        Swal.fire({
          icon: 'error',
          title: 'Approval Failed',
          text: 'An error occurred while approving the student. Please try again.',
          confirmButtonColor: '#d33',
        });
      }
    );
  }

}
