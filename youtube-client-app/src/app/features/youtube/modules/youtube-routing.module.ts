import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '../pages/main/main.component';
import { DetailsComponent } from '../components/details/details.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: MainComponent },
  { path: 'details/:id', component: DetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YoutubeRoutingModule {}
