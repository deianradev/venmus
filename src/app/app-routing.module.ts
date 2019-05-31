import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: "full"},
  { path: '**', component: PageNotFoundComponent },
  // { path: 'host', loadChildren: './host/host.module#HostModule'},
  // { path: 'artist', loadChildren: './artist/artist.module#ArtistModule'},
  // { path: 'host', loadChildren: './patron/patron.module#PatronModule'}
  // { path: 'host', component: HostComponent},
  // { path: 'artist', component: ArtistComponent},
  // { path: 'patron', component: PatronComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
