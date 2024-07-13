import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'main',
    loadChildren: () =>
      import('./features/youtube/modules/youtube.module').then(
        (m) => m.YoutubeModule,
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./features/auth/modules/auth.module').then((m) => m.AuthModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
