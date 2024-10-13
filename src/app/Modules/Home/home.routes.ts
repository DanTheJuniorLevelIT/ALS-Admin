import { Routes } from '@angular/router';

import { EnrollStudentsComponent } from './enroll-students/enroll-students.component';
import { AssignClassComponent } from './assign-class/assign-class.component';
import { MainHomeComponent } from './main-home/main-home.component';

import { ApproveComponent } from './approve/approve.component';

export const homeRoute: Routes = [
    {path: 'mainHome', component: MainHomeComponent,
        children:[
            {path: 'assingclass', component: AssignClassComponent},
            {path: 'enroll', component: EnrollStudentsComponent,},
            {path: 'approve',component: ApproveComponent},
            {path: '', redirectTo: 'enroll', pathMatch: 'full'}
        ]
    },
    {path: '', redirectTo: 'mainHome', pathMatch: 'full'}
   
];
