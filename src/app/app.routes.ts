import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { homeRoute } from './Modules/Home/home.routes';
import { accountRoute } from './Modules/Account/account.routes';
import { classRoute } from './Modules/Classes/class.routes';
import { studentRoute } from './Modules/Students/student.routes';
import { teacherRoute } from './Modules/Teachers/teacher.routes';
import { reportRoute } from './Modules/Reports/reports.routes';

export const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'main', component: MainComponent,
        children: [
            {
                path: 'Home',
                loadChildren: () => import('./Modules/Home/home.routes').then(r=>homeRoute)
            },
            {
                path: 'Class',
                loadChildren: () => import('./Modules/Classes/class.routes').then(r=>classRoute)
            },
            {
                path: 'Student',
                loadChildren: () => import('./Modules/Students/student.routes').then(r=>studentRoute)
            },
            {
                path: 'Reports',
                loadChildren: () => import('./Modules/Reports/reports.routes').then(r=>reportRoute)
            },
            {
                path: 'Teacher',
                loadChildren: () => import('./Modules/Teachers/teacher.routes').then(r=>teacherRoute)
            },
            {
                path: 'Account',
                loadChildren: () => import('./Modules/Account/account.routes').then(r=>accountRoute)
            },
            {path: '', redirectTo: 'Home', pathMatch: 'full'}
        ]
    },
    {path: '', redirectTo: 'login', pathMatch: 'full'}
];
