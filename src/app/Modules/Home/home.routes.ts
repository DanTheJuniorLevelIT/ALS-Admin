import { Routes } from '@angular/router';

import { EnrollStudentsComponent } from './enroll-students/enroll-students.component';
import { AssignClassComponent } from './assign-class/assign-class.component';
import { MainHomeComponent } from './main-home/main-home.component';
import { AlsElemComponent } from './als-elem/als-elem.component';
import { AlsJuniorComponent } from './als-junior/als-junior.component';
import { BlpComponent } from './blp/blp.component';
import { ApproveComponent } from './approve/approve.component';
import { AlsElemAprroveComponent } from './als-elem-aprrove/als-elem-aprrove.component';
import { AlsJuniorAprroveComponent } from './als-junior-aprrove/als-junior-aprrove.component';
import { BlpAprroveComponent } from './blp-aprrove/blp-aprrove.component';

export const homeRoute: Routes = [
    {path: 'mainHome', component: MainHomeComponent,
        children:[
            {path: 'assingclass', component: AssignClassComponent},
            {
                path: 'enroll',
                component: EnrollStudentsComponent,
                children:[
                  {path: 'alsElem', component: AlsElemComponent},
                  {path: 'alsJunior', component: AlsJuniorComponent},
                  {path: 'blp', component: BlpComponent},
                  {path: '', redirectTo: 'blp', pathMatch: 'full'}
                ]
            },
            {
                path: 'approve',
                component: ApproveComponent,
                children:[
                  {path: 'alsElemApprove', component: AlsElemAprroveComponent},
                  {path: 'alsJuniorApprove', component: AlsJuniorAprroveComponent},
                  {path: 'blpApprove', component: BlpAprroveComponent},
                  {path: '', redirectTo: 'blpApprove', pathMatch: 'full'}
                ]
            },
            {path: '', redirectTo: 'enroll', pathMatch: 'full'}
        ]
    },
    {path: '', redirectTo: 'mainHome', pathMatch: 'full'}
   
];
