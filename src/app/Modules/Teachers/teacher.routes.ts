import { Routes } from '@angular/router';
import { ViewTeachersComponent } from './view-teachers/view-teachers.component';
import { NewTeachersComponent } from './new-teachers/new-teachers.component';

export const teacherRoute: Routes = [
    {path: 'viewTeacher', component: ViewTeachersComponent},
    {path: 'newTeacher', component: NewTeachersComponent},
    {path: '', redirectTo: 'viewTeacher', pathMatch: 'full'}
];