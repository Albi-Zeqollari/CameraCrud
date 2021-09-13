
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CameraListComponent } from './camera-list/camera-list.component';
import { CreateCameraComponent } from './create-camera/create-camera.component';
import { FormsModule } from '@angular/forms';
import { UpdateCameraComponent } from './update-camera/update-camera.component';
import { CameraDetailsComponent } from './camera-details/camera-details.component';
import {BrowserAnimationsModule} from  '@angular/platform-browser/animations';
import {ToastrModule} from 'ng6-toastr-notifications'
import { ConfirmBoxConfigModule, NgxAwesomePopupModule } from '@costlydeveloper/ngx-awesome-popup';
import { NgModule } from '@angular/core';
import { ChartComponent } from './chart/chart.component';







@NgModule({
  declarations: [
    AppComponent,
    CameraListComponent,
    CreateCameraComponent,
    UpdateCameraComponent,
    CameraDetailsComponent,
    ChartComponent,
  
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgxAwesomePopupModule.forRoot(),
    ConfirmBoxConfigModule.forRoot(),
 
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
