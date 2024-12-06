import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ApiServiceService } from '../../../api-service.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchPipe } from '../../../search.pipe';
import Swal from 'sweetalert2';

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
  selectedClassId:any;
  storedclassID:any;
  clasid:any;

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
  this.apiService.showStudentAlsJunior(classid).subscribe(
      (response) => {
          console.log(response);  
          this.approveStudentJunior = response;  
          console.log('Approve student:', this.approveStudentJunior);  
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



