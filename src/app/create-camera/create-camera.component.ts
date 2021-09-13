import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { Camera } from '../camera';
import { CameraService } from '../camera.service';
import {ToastrModule, ToastrManager} from 'ng6-toastr-notifications'

@Component({
  selector: 'app-create-camera',
  templateUrl: './create-camera.component.html',
  styleUrls: ['./create-camera.component.css']
})
export class CreateCameraComponent implements OnInit {


  camera: Camera = new Camera();
  constructor(private cameraService:CameraService, 
  private  router: Router,
  public toastr:ToastrManager)  { }


  ngOnInit(): void { 
    
 
  }


showSuccess() {
    this.toastr.successToastr('Succesfully added');
}


  saveCamera(){

    this.cameraService.createCamera(this.camera).subscribe(data =>{

      console.log(data);
    
      this.goToCameraList();
      this.showSuccess();
     
    },
    error => alert("This name/ip already exists"))
  }

  goToCameraList(){

    this.router.navigate(['/cameras'])
  }

  onSubmit(){

  
    console.log(this.camera);
    this.saveCamera();
  
  }

  

}
