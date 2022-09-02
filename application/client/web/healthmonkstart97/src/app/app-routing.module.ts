import { AuthGuard } from './auth/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SefscreenComponent } from './sefscreen/sefscreen.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { UpdateauthorizationComponent } from './authorization/updateauthorization/updateauthorization.component';
import { Button-renderedComponent } from './button-rendered/button-rendered.component';
import { ManagerolesComponent } from './manageroles/manageroles.component';
import { ManageusersComponent } from './manageusers/manageusers.component';
import { ManagecontrolComponent } from './managecontrol/managecontrol.component';
import { UserComponent } from './user/user.component';
import { ProfilesettingsComponent } from './user/profilesettings/profilesettings.component';
import { VaultadminComponent } from './vaultadmin/vaultadmin.component';
import { TemplateComponent } from './template/template.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
{ path: 'sefscreen', component: SefscreenComponent, canActivate: [AuthGuard] },
{ path: 'signup', component: SignupComponent },
{ path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
{ path: 'authorization', component: AuthorizationComponent, canActivate: [AuthGuard] },
{ path: 'updateauthorization', component: UpdateauthorizationComponent, canActivate: [AuthGuard] },
{ path: 'button-rendered', component: Button-renderedComponent },
{ path: 'manageroles', component: ManagerolesComponent, canActivate: [AuthGuard] },
{ path: 'manageusers', component: ManageusersComponent, canActivate: [AuthGuard] },
{ path: 'managecontrol', component: ManagecontrolComponent, canActivate: [AuthGuard] },
{ path: 'usermanagement', component: UserComponent, canActivate: [AuthGuard] },
{ path: 'profile', component: ProfilesettingsComponent, canActivate: [AuthGuard] },
{ path: 'vaultadmin', component: VaultadminComponent, canActivate: [AuthGuard] },
       { path: '', component: TemplateComponent, pathMatch: 'full'   } ,
{ path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },

{ path : 'searchworkouts', loadChildren: () => import('./searchworkouts/searchworkouts.module').then(m => m.SearchworkoutsModule), canActivate: [AuthGuard] } , 
{ path : 'swimmingbackstoke', loadChildren: () => import('./swimmingbackstoke/swimmingbackstoke.module').then(m => m.SwimmingbackstokeModule), canActivate: [AuthGuard] } , 
{ path : 'workoutreminderpopupscreen', loadChildren: () => import('./workoutreminderpopupscreen/workoutreminderpopupscreen.module').then(m => m.WorkoutreminderpopupscreenModule), canActivate: [AuthGuard] } , 
{ path : 'swimmingbackstokedetails', loadChildren: () => import('./swimmingbackstokedetails/swimmingbackstokedetails.module').then(m => m.SwimmingbackstokedetailsModule), canActivate: [AuthGuard] } , 
{ path : 'searchingtheworkouts', loadChildren: () => import('./searchingtheworkouts/searchingtheworkouts.module').then(m => m.SearchingtheworkoutsModule), canActivate: [AuthGuard] } , 
{ path : 'frequentlytrack ', loadChildren: () => import('./frequentlytrack /frequentlytrack .module').then(m => m.Frequentlytrack Module), canActivate: [AuthGuard] } , 
{ path : 'frequentlytracks', loadChildren: () => import('./frequentlytracks/frequentlytracks.module').then(m => m.FrequentlytracksModule), canActivate: [AuthGuard] } , 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
