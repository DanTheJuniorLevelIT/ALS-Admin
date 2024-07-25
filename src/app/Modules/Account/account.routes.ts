import { Routes } from '@angular/router';
import { AccountInfoComponent } from './account-info/account-info.component';
import { EditComponent } from './edit/edit.component';

export const accountRoute: Routes = [
    {path: 'accountInfo', component: AccountInfoComponent},
    {path: 'edit', component: EditComponent},
    {path: '', redirectTo: 'accountInfo', pathMatch: 'full'}
];