import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatronComponent } from './patron/patron.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'patron',
    children: [
     { path: '', component: PatronComponent },
    //  { path: ':id', component: PassengerViewerComponent }
    ]
  }
];

@NgModule({
  declarations: [PatronComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PatronModule { }
