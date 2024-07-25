import { Routes } from '@angular/router';
import { NewClassComponent } from './new-class/new-class.component';
import { ViewClassesComponent } from './view-classes/view-classes.component';
import { AssignClassComponent } from '../Home/assign-class/assign-class.component';

export const classRoute: Routes = [
    {path: 'viewClass', component: ViewClassesComponent},
    {path: 'newClass', component: NewClassComponent},
    {path: 'assignClass', component: AssignClassComponent},
    {path: '', redirectTo: 'viewClass', pathMatch: 'full'}
    
];