import { Component, OnInit } from '@angular/core';
import {
  Chart,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  Tooltip,
} from 'chart.js';
import { Camera } from '../camera';

import { CameraService } from '../camera.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export class ChartComponent implements OnInit {
  
  constructor(private cameraService: CameraService) {}

  Name: Array<any> = [];
  Resolution: Array<any> = [];

  ngOnInit(): void {
    this.cameraService.getCamerasList().subscribe((data) => {
      data.forEach((res) => {
        this.Resolution.push(res.resolution);
        
    
      });
        
      var current = 1;
      var cnt = 0;
    
      for (var i = 0; i <= this.Resolution.length; i++) {


          if (this.Resolution[i] != current) {

              if (cnt > 0) {
                document.getElementById('divChart')!.innerHTML += ("Camera with " +current + " resolution" + ' appears--> ' + cnt + ' times' + '<br>');
              }
              current = this.Resolution[i];
              cnt = 1;
          }
           else {
              cnt++;
          }
      }

      // const distribution = this.Resolution.reduce((acum,cur) => Object.assign(acum,{[cur]: (acum[cur] || 0)+1}),{});
      // document.getElementById('div')!.innerHTML += "Camera with resolution: <br>"+(JSON.stringify(distribution,null,2));
     


      data.forEach((x) => {
      this.Name.push(x.name)

        
    });

      let chart = new Chart('myChart', {
        type: 'pie',
        data: {
          labels: this.Name,
          datasets: [
            {
              data: this.Resolution,
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {},
        },
      });
    }
    
    );
  }
}
