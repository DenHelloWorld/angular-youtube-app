import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from 'app/core/pages/not-found/not-found.component';
import { authGuard } from 'app/features/auth/guards/auth.guard';
import { preventAuthGuard } from 'app/features/auth/guards/unAuth.guard';
import { GreetingComponent } from './core/pages/greeting/greeting.component';

const routes: Routes = [
  { path: '', redirectTo: '/greeting', pathMatch: 'full' },
  { path: '404', component: NotFoundComponent },
  { path: 'greeting', component: GreetingComponent },
  {
    path: 'main',
    loadChildren: () => import('./features/youtube/modules/youtube.module').then(m => m.YoutubeModule),
    canActivate: [authGuard],
  },
  {
    path: 'login',
    loadChildren: () => import('./features/auth/modules/auth.module').then(m => m.AuthModule),
    canActivate: [preventAuthGuard],
  },
  {
    path: 'admin',
    loadChildren: () => import('./features/admin/modules/admin/admin.module').then(m => m.AdminModule),
  },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
