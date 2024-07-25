import { Routes } from '@angular/router';

import { EnrollStudentsComponent } from './enroll-students/enroll-students.component';
import { AssignClassComponent } from './assign-class/assign-class.component';

export const homeRoute: Routes = [
    {path: 'enroll', component: EnrollStudentsComponent},
    {path: 'assingclass', component: AssignClassComponent},
    {path: '', redirectTo: 'enroll', pathMatch: 'full'}
];
