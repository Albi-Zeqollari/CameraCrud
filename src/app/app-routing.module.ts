import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CameraDetailsComponent } from './camera-details/camera-details.component';
import { CameraListComponent } from './camera-list/camera-list.component';
import { CreateCameraComponent } from './create-camera/create-camera.component';
import { UpdateCameraComponent } from './update-camera/update-camera.component';

const routes: Routes = [
  { path: 'cameras', component: CameraListComponent },
  { path: 'create-camera', component: CreateCameraComponent },
  { path: '', redirectTo: 'cameras', pathMatch: 'full' },
  { path: 'update-camera/:id', component: UpdateCameraComponent },
  { path: 'camera-details/:id', component: CameraDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
