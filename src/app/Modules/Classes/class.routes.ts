import { Routes } from '@angular/router';
import { NewClassComponent } from './new-class/new-class.component';
import { ViewClassesComponent } from './view-classes/view-classes.component';
import { AssignClassComponent } from '../Home/assign-class/assign-class.component';
import { MainClassComponent } from './main-class/main-class.component';
import { AlsElemComponent } from './als-elem/als-elem.component';
import { AlsJuniorComponent } from './als-junior/als-junior.component';
import { AlsBlpComponent } from './als-blp/als-blp.component';

export const classRoute: Routes = [
    {path: 'mainClass', component: MainClassComponent,
        children:[
            {path: 'viewClass', component: ViewClassesComponent,
                    children:[
                      {path: 'elem', component: AlsElemComponent},
                      {path: 'junior', component: AlsJuniorComponent},
                      {path: 'alsblp', component: AlsBlpComponent},
                      {path: '', redirectTo: 'alsblp', pathMatch: 'full'}
                    ]
                
            },
            {path: 'newClass', component: NewClassComponent},
            {path: 'assignClass', component: AssignClassComponent},
            {path: '', redirectTo: 'viewClass', pathMatch: 'full'}
        ]
    },
    {path: '', redirectTo: 'mainClass', pathMatch: 'full'}
    
    
];