import { Routes } from '@angular/router';
import { ViewStudentsComponent } from './view-students/view-students.component';
import { UpdaterecordStudentComponent } from './updaterecord-student/updaterecord-student.component';
import { MainStudentsComponent } from './main-students/main-students.component';

export const studentRoute: Routes = [
    {path: 'mainStudent', component: MainStudentsComponent,
        children:[
            {path: 'viewStudent', component: ViewStudentsComponent},
            {path: 'updateRecordS', component: UpdaterecordStudentComponent},
            {path: '', redirectTo: 'viewStudent', pathMatch: 'full'}
        ]
    },
    {path: '', redirectTo: 'mainStudent', pathMatch: 'full'}
   
];