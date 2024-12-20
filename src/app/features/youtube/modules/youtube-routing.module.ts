import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from 'app/features/youtube/components/details/details.component';
import { FavoritePageComponent } from 'app/features/youtube/pages/favorite-page/favorite-page.component';
import { MainComponent } from 'app/features/youtube/pages/main/main.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: MainComponent },
  { path: 'details/:id', component: DetailsComponent },
  { path: 'favorite', component: FavoritePageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YoutubeRoutingModule {}
