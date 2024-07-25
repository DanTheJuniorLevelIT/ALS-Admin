import { Routes } from '@angular/router';
import { ViewStudentsComponent } from './view-students/view-students.component';
import { UpdaterecordStudentComponent } from './updaterecord-student/updaterecord-student.component';

export const studentRoute: Routes = [
    {path: 'viewStudent', component: ViewStudentsComponent},
    {path: 'updateRecord', component: UpdaterecordStudentComponent},
    {path: '', redirectTo: 'viewStudent', pathMatch: 'full'}
];