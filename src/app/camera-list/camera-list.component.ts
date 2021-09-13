import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';
import { Camera } from '../camera';
import { CameraService } from '../camera.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-camera-list',
  templateUrl: './camera-list.component.html',
  styleUrls: ['./camera-list.component.css'],
})
export class CameraListComponent implements OnInit {
  cameras?: Camera[];

  constructor(
    private cameraService: CameraService,
    private router: Router,
    public toastr: ToastrManager,
    private location: Location
    
  ) {}

  ngOnInit(): void {
    this.getCameras();
    
  }

  pageRefresh() {
    location.reload();
 }

  private getCameras() {
    this.cameraService.getCamerasList().subscribe((data) => {
      this.cameras = data;
    });
  }
  showSuccess() {
    this.toastr.successToastr('Succesfully deleted');
  }

  updateCamera(id?: number) {
    this.router.navigate(['update-camera', id]);
  }

  deleteCamera(id?: number) {
    if (window.confirm('Are you sure to delete this?')) {

      this.cameraService.deleteCamera(id).subscribe((data) => {
      
        this.showSuccess();
        this.getCameras();
       this.pageRefresh();
      
      });
    }
    
  }
 
  cameraDetails(id?: number) {
    this.router.navigate(['camera-details', id]);
  }

  
}
