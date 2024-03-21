import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProfilerComponent } from './profiler/profiler.component';

const routes: Routes = [
  {
    path: '',
    component: ProfilerComponent,
  },
];
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ProfileRouteModule {}
