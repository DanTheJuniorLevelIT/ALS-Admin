import { Routes } from '@angular/router';
import { ViewTeachersComponent } from './view-teachers/view-teachers.component';
import { NewTeachersComponent } from './new-teachers/new-teachers.component';
import { UpdaterecordTeacherComponent } from './updaterecord-teacher/updaterecord-teacher.component';
import { MainTeachersComponent } from './main-teachers/main-teachers.component';
import { TeacherSubjectsComponent } from './teacher-subjects/teacher-subjects.component';
import { StudenListComponent } from './studen-list/studen-list.component';
import { UpdateRosterComponent } from './update-roster/update-roster.component';


export const teacherRoute: Routes = [
    {path: 'mainTeacher', component: MainTeachersComponent,
        children:[
            {path: 'viewTeacher', component: ViewTeachersComponent},
            {path: 'newTeacher', component: NewTeachersComponent},
            {path: 'updateRecordT', component: UpdaterecordTeacherComponent},
            {path: 'teachersubject', component: TeacherSubjectsComponent},
            {path: 'updateRoster', component: UpdateRosterComponent},
            {path: 'StudentSubList/:id', component: StudenListComponent},
            {path: '', redirectTo: 'viewTeacher', pathMatch: 'full'}
        ]
    },
    {path: '', redirectTo: 'mainTeacher', pathMatch: 'full'}
    
];