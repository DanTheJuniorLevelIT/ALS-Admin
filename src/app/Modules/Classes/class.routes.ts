import { Routes } from '@angular/router';
import { NewClassComponent } from './new-class/new-class.component';
import { ViewClassesComponent } from './view-classes/view-classes.component';
import { AssignClassComponent } from '../Home/assign-class/assign-class.component';
import { MainClassComponent } from './main-class/main-class.component';

export const classRoute: Routes = [
    {path: 'mainClass', component: MainClassComponent,
        children:[
            {path: 'viewClass', component: ViewClassesComponent},
            {path: 'newClass', component: NewClassComponent},
            {path: 'assignClass', component: AssignClassComponent},
            {path: '', redirectTo: 'viewClass', pathMatch: 'full'}
        ]
    },
    {path: '', redirectTo: 'mainClass', pathMatch: 'full'}
    
    
];