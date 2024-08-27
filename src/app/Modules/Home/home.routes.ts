import { Routes } from '@angular/router';

import { EnrollStudentsComponent } from './enroll-students/enroll-students.component';
import { AssignClassComponent } from './assign-class/assign-class.component';
import { MainHomeComponent } from './main-home/main-home.component';
import { AlsElemComponent } from './als-elem/als-elem.component';
import { AlsJuniorComponent } from './als-junior/als-junior.component';
import { BlpComponent } from './blp/blp.component';

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
                  {path: '', redirectTo: 'enroll', pathMatch: 'full'}
                ]
            }
        ]
    },
    {path: '', redirectTo: 'mainHome', pathMatch: 'full'}
   
];
