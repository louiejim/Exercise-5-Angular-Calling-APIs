import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilerComponent } from './profiler/profiler.component';
import { ProfileRouteModule } from './profile-route.module';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [ProfilerComponent],
  imports: [
    CommonModule,
    ProfileRouteModule,
    MatInputModule,
    MatCheckboxModule,
  ],
})
export class UserModule {}
