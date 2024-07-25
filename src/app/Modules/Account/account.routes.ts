import { Routes } from '@angular/router';
import { AccountInfoComponent } from './account-info/account-info.component';
import { ChangePassComponent } from './change-pass/change-pass.component';


export const accountRoute: Routes = [
    {path: 'accountInfo', component: AccountInfoComponent},
    {path: 'changePass', component: ChangePassComponent},
    {path: '', redirectTo: 'accountInfo', pathMatch: 'full'}
];