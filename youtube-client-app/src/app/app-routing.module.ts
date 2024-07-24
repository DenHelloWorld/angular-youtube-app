import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from 'app/core/components/not-found/not-found.component';
import { authGuard } from 'app/features/auth/guards/auth.guard';
import { preventAuthGuard } from 'app/features/auth/guards/unAuth.guard';

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
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
