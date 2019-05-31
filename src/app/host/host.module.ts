import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HostComponent } from './host/host.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'host',
    children: [
     { path: '', component: HostComponent },
    //  { path: ':id', component: PassengerViewerComponent }
    ]
  }
];

@NgModule({
  declarations: [HostComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HostModule { }
