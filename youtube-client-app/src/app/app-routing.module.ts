import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './features/auth/guards/auth.guard';
import { preventAuthGuard } from './features/auth/guards/unAuth.guard';
import { NotFoundComponent } from './core/components/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: '404', component: NotFoundComponent },
  {
    path: 'main',
    loadChildren: () =>
      import('./features/youtube/modules/youtube.module').then(
        (m) => m.YoutubeModule,
      ),
    canActivate: [authGuard],
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./features/auth/modules/auth.module').then((m) => m.AuthModule),
    canActivate: [preventAuthGuard],
  },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
