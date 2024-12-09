import { Routes } from '@angular/router';
import { MainReportsComponent } from './main-reports/main-reports.component';
import { ViewReportsComponent } from './view-reports/view-reports.component';


export const reportRoute: Routes = [
    {path: 'mainReports', component: MainReportsComponent,
        children:[
            {path: 'viewReports', component: ViewReportsComponent},
            {path: '',redirectTo: 'viewReports', pathMatch: 'full'},
        ]
        
    },
    {path: '', redirectTo: 'mainReports', pathMatch: 'full'}
   
];