import { Routes } from '@angular/router';
import { AccountInfoComponent } from './account-info/account-info.component';
import { ChangePassComponent } from './change-pass/change-pass.component';
import { MainAccountComponent } from './main-account/main-account.component';
import { UploadComponent } from './upload/upload.component';


export const accountRoute: Routes = [
    {path: 'mainAccount', component: MainAccountComponent,
        children:[
            {path: 'accountInfo', component: AccountInfoComponent},
            {path: 'changePass', component: ChangePassComponent},
            {path: 'changeprofile', component: UploadComponent},
            {path: '', redirectTo: 'accountInfo', pathMatch: 'full'}
        ]
    },
    {path: '', redirectTo: 'mainAccount', pathMatch: 'full'}
    
];