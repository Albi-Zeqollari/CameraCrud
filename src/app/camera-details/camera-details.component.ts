import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Camera } from '../camera';
import { CameraService } from '../camera.service';

@Component({
  selector: 'app-camera-details',
  templateUrl: './camera-details.component.html',
  styleUrls: ['./camera-details.component.css'],
})
export class CameraDetailsComponent implements OnInit {
  id?: number;

  camera?: Camera;

  constructor(
    private route: ActivatedRoute,
    private cameraService: CameraService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.camera = new Camera();

    this.cameraService.getCameraById(this.id).subscribe((data) => {
      this.camera = data;
    });
  }
}
