import { Routes, RouterModule } from '@angular/router';
import { ClAuthGuard } from '../guards/client/index';

import { ClContainerComponent } from '../components/client/cl-container/cl-container.component';
import { ClHomeComponent } from '../components/client/cl-home/cl-home.component';
import { ClWalletComponent } from '../components/client/cl-wallet/cl-wallet.component';
import { ClProfileComponent } from '../components/client/cl-profile/cl-profile.component';
import { ClLoginRegComponent } from '../components/client/cl-login-reg/cl-login-reg.component';

const appRoutes: Routes = [
    { path: '', redirectTo: 'client/home', pathMatch: 'full' },
    {
        path: 'client',
        component: ClContainerComponent,
        children: [
            { path: 'home', component: ClHomeComponent},
            { path: 'wallet', component: ClWalletComponent },
            { path: 'profile', component: ClProfileComponent },
            { path: 'loginreg', component: ClLoginRegComponent }
            /*{ path: 'home', component: ClHomeComponent, canActivate: [ClAuthGuard] },
            { path: 'profile', component: ClProfileComponent, canActivate: [ClAuthGuard]},
            { path: 'profile-edit', component: ClProfileEditComponent, canActivate: [ClAuthGuard] },
            { path: 'food-detail/:id', component: ClFoodDetailComponent },
            { path: 'forgot-password', component: ClForgotPasswordComponent },
            { path: 'verification/:code', component: ClVerificationComponent },*/
        ]
    },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
