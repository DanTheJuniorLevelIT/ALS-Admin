import { Routes } from '@angular/router';
import { ViewTeachersComponent } from './view-teachers/view-teachers.component';
import { NewTeachersComponent } from './new-teachers/new-teachers.component';
import { UpdaterecordTeacherComponent } from './updaterecord-teacher/updaterecord-teacher.component';

export const teacherRoute: Routes = [
    {path: 'viewTeacher', component: ViewTeachersComponent},
    {path: 'newTeacher', component: NewTeachersComponent},
    {path: 'updateRecordT', component: UpdaterecordTeacherComponent},
    {path: '', redirectTo: 'viewTeacher', pathMatch: 'full'}
];