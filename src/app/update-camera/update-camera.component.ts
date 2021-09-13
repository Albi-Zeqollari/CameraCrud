import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';
import { Camera } from '../camera';
import { CameraService } from '../camera.service';


@Component({
  selector: 'app-update-camera',
  templateUrl: './update-camera.component.html',
  styleUrls: ['./update-camera.component.css']
})
export class UpdateCameraComponent implements OnInit {

  id?:number;
  camera: Camera = new Camera()

  constructor( private cameraService:CameraService,
    private route:ActivatedRoute,
    private router:Router,
    public toastr:ToastrManager ) { }


  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.cameraService.getCameraById(this.id).subscribe(data =>{

      this.camera = data;

    },
    error => console.log(error));
  }


  showSuccess() {
    this.toastr.successToastr('Succesfully updated');
}


  onSubmit(){
   
    this.cameraService.updateCamera(this.id , this.camera).subscribe(data =>{
    this.goToCameraList();
    this.showSuccess();
    },
    error => alert("This name/ip already exists"));
  }
  

  goToCameraList(){

    this.router.navigate(['/cameras']);

  }

}
