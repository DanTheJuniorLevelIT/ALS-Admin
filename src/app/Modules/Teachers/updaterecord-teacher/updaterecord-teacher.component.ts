import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ApiServiceService } from '../../../api-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-updaterecord-teacher',
  standalone: true,
  imports: [RouterModule,CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './updaterecord-teacher.component.html',
  styleUrl: './updaterecord-teacher.component.css'
})
export class UpdaterecordTeacherComponent implements OnInit{
  teacher_id = localStorage.getItem('TeacherID');
  idNumber: any;

  student:any;

  gvalue: any = ["Male", "Female"];
  updateTeacherForm = new FormGroup({
    lastname: new FormControl(null),
    firstname: new FormControl(null),
    middlename: new FormControl(null),
    birthdate: new FormControl(null),
    gender: new FormControl(null),
    address: new FormControl(null),
    role: new FormControl("Teacher"),
    mobile_number: new FormControl(null),
    email: new FormControl(null),
    password: new FormControl(null),
    password_confirmation: new FormControl(null),
  })

  constructor(private apiService: ApiServiceService, private route: Router){}

  new() {
    if (this.updateTeacherForm.valid) {
      this.apiService.newTeacher(this.updateTeacherForm.value).subscribe(
        (response) => {
          console.log('User enrolled:', response);  // Inspect response here
          alert('User enrolled successfully!');
          this.updateTeacherForm.reset();
          this.route.navigate(['/main/Teacher/mainTeacher/viewTeacher']);
        },
        (error) => {
          console.error('Error enrolling user:', error); // Check the exact error
        }
      );
    } 
  }
  ngOnInit(): void {
    const teacher_id = localStorage.getItem('TeacherID');
    console.log('teacherss',teacher_id)
    this.idNumber = Number(teacher_id); 
    console.log('id num',this.idNumber)
    this.apiService.getTeacher(this.idNumber).subscribe((result: any) =>{
      this.student = result;
      console.log(result);
      this.updateTeacherForm.controls['lastname'].setValue(this.student[0].lastname);
      this.updateTeacherForm.controls['firstname'].setValue(this.student[0].firstname);
      this.updateTeacherForm.controls['middlename'].setValue(this.student[0].middlename);
      this.updateTeacherForm.controls['address'].setValue(this.student[0].address);
      this.updateTeacherForm.controls['role'].setValue(this.student[0].role);
      this.updateTeacherForm.controls['birthdate'].setValue(this.student[0].birthdate); 
      this.updateTeacherForm.controls['gender'].setValue(this.student[0].gender);
      this.updateTeacherForm.controls['mobile_number'].setValue(this.student[0].mobile_number);
      this.updateTeacherForm.controls['email'].setValue(this.student[0].email);
    })
  }

  updateInfo() {
    console.log(this.idNumber);
    if (this.updateTeacherForm.valid) {
      this.apiService.updateTeacherINFO(this.idNumber, this.updateTeacherForm.value).subscribe(
        (response) => {
          console.log('User updated successfully', response);
          this.route.navigate(['/main/Teacher/mainTeacher/viewTeacher']);
        },
        (error) => {
          console.error('Error updating user', error);
        }
      );
    } else {
      console.error('Form is invalid');
      // Add some error feedback to the user
    }

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
  const adminId = localStorage.getItem('TeacherID');
  console.log(adminId);

  if (this.selectedFile) {
    this.apiService.uploadFile(adminId, this.selectedFile).subscribe(
      (response) => {
        console.log('File uploaded successfully:', response);

        // SweetAlert for success
        Swal.fire({
          icon: 'success',
          title: 'Upload Successful',
          text: 'The file has been uploaded successfully!',
          confirmButtonColor: '#3085d6',
        }).then(() => {
          this.route.navigate(['/main/Teacher/mainTeacher/viewTeacher']);
        });
      },
      (error) => {
        console.error('Error uploading file:', error);

        // SweetAlert for error
        Swal.fire({
          icon: 'error',
          title: 'Upload Failed',
          text: 'An error occurred while uploading the file. Please try again.',
          confirmButtonColor: '#d33',
        });
      }
    );
  } else {
    // SweetAlert for no file selected
    Swal.fire({
      icon: 'warning',
      title: 'No File Selected',
      text: 'Please choose a file to upload.',
      confirmButtonColor: '#f39c12',
    });
  }
}

}
