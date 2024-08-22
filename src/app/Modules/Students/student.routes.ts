import { Routes } from '@angular/router';
import { ViewStudentsComponent } from './view-students/view-students.component';
import { UpdaterecordStudentComponent } from './updaterecord-student/updaterecord-student.component';
import { MainStudentsComponent } from './main-students/main-students.component';
import { ViewDetailsComponent } from './view-details/view-details.component';

export const studentRoute: Routes = [
    {path: 'mainStudent', component: MainStudentsComponent,
        children:[
            {path: 'viewStudent', component: ViewStudentsComponent},
            {path: 'updateRecordS', component: UpdaterecordStudentComponent},
            {path: 'viewDetails', component: ViewDetailsComponent},
            {path: '', redirectTo: 'viewStudent', pathMatch: 'full'}
        ]
    },
    {path: '', redirectTo: 'mainStudent', pathMatch: 'full'}
   
];