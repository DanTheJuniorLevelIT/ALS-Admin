import { Routes } from '@angular/router';

import { EnrollStudentsComponent } from './enroll-students/enroll-students.component';
import { AssignClassComponent } from './assign-class/assign-class.component';
import { MainHomeComponent } from './main-home/main-home.component';

export const homeRoute: Routes = [
    {path: 'mainHome', component: MainHomeComponent,
        children:[
            {path: 'enroll', component: EnrollStudentsComponent},
            {path: 'assingclass', component: AssignClassComponent},
            {path: '', redirectTo: 'enroll', pathMatch: 'full'}
        ]
    },
    {path: '', redirectTo: 'mainHome', pathMatch: 'full'}
   
];
