import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalisComponent } from 'app/features/youtube/components/detalis/detalis.component';
import { MainComponent } from 'app/features/youtube/pages/main/main.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: MainComponent },
  { path: 'detalis/:id', component: DetalisComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YoutubeRoutingModule {}
