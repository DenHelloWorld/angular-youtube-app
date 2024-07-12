import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import HeaderComponent from './core/components/header/header.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: HeaderComponent,
  // },
  {
    path: 'youtube',
    loadChildren: () =>
      import('./features/youtube/modules/youtube.module').then(
        (m) => m.YoutubeModule,
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
