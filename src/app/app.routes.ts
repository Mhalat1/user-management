import { Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { LoginComponent } from './login/login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

export const routes: Routes = [

    { path: '', component: UserListComponent, pathMatch: 'full' }, // Redirection vers la liste des utilisateurs par défaut

    { path: 'login', component: LoginComponent,  }, // Redirection vers la liste des utilisateurs par défaut

    { path: 'users/:id', component: UserProfileComponent,  }, // Redirection vers la liste des utilisateurs par défaut

];
