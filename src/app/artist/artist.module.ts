import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistComponent } from './artist/artist.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'artist',
    children: [
     { path: '', component: ArtistComponent },
    //  { path: ':id', component: PassengerViewerComponent }
    ]
  }
];

@NgModule({
  declarations: [ArtistComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ArtistModule { }
