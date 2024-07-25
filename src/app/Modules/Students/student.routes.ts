import { Routes } from '@angular/router';
import { ViewStudentsComponent } from './view-students/view-students.component';

export const studentRoute: Routes = [
    {path: 'viewStudent', component: ViewStudentsComponent},
    {path: '', redirectTo: 'viewStudent', pathMatch: 'full'}
];