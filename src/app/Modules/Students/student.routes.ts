import { Routes } from '@angular/router';
import { ViewStudentsComponent } from './view-students/view-students.component';
import { UpdaterecordStudentComponent } from './updaterecord-student/updaterecord-student.component';
import { MainStudentsComponent } from './main-students/main-students.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { ElemComponent } from './elem/elem.component';
import { JuniorComponent } from './junior/junior.component';
import { AlsblpComponent } from './alsblp/alsblp.component';

export const studentRoute: Routes = [
    {path: 'mainStudent', component: MainStudentsComponent,
        children:[
            {path: 'updateRecordS', component: UpdaterecordStudentComponent},
            {path: 'viewDetails', component: ViewDetailsComponent},
            {path: '',redirectTo: 'viewStudent', pathMatch: 'full'},
            {
                path: 'viewStudent',
                component: ViewStudentsComponent,
                children:[
                  {path: 'elem', component: ElemComponent},
                  {path: 'junior', component: JuniorComponent},
                  {path: 'alsblp', component: AlsblpComponent},
                  {path: '', redirectTo: 'alsblp', pathMatch: 'full'}
                ]
            }
        ]
        
    },
    {path: '', redirectTo: 'mainStudent', pathMatch: 'full'}
   
];