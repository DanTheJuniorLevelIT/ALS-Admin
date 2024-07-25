import { Routes } from '@angular/router';
import { SummaryComponent } from './summary/summary.component';
import { EnrollStudentsComponent } from './enroll-students/enroll-students.component';

export const homeRoute: Routes = [
    {path: 'summary', component: SummaryComponent},
    {path: 'enroll', component: EnrollStudentsComponent}
];