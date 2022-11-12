import { Component, OnInit } from '@angular/core';
import { RtdbService } from '../services/rtdb.service';

@Component({
  selector: 'app-rtdb-page',
  templateUrl: './rtdb-page.page.html',
  styleUrls: ['./rtdb-page.page.scss'],
})
export class RtdbPagePage  {
  flashValue: string ;
  ipValue: string;
  statusValue: boolean;
  vitalSignValue: number ;
  verticalValue: number;
  horizontalValue: number;
  resultStyleFlash: boolean;
  resultStyleIp: boolean;
  resultStyleStatus: boolean;
  resultStyleVitalS: boolean;
  resultStyleVer: boolean;
  resultStyleHor: boolean;
  constructor(private rtsbS: RtdbService) { 
    rtsbS.streamData().valueChanges().subscribe(res => {
      this.resultStyleFlash = true;
      this.flashValue = res[0].value;
      setTimeout(() => {
        this.resultStyleFlash = false;
      }, 1500);
    })
    rtsbS.ip().subscribe(res => {
      this.resultStyleIp = true;
      this.ipValue = res[0];
      setTimeout(() => {
        this.resultStyleIp = false;
      }, 1500);
    })
    rtsbS.statusConected().subscribe(res => {
      this.resultStyleStatus = res[0].value;
      this.resultStyleVitalS = true;
      this.statusValue = res[0].value;
      this.vitalSignValue = res[1];
      setTimeout(() => {
        this.resultStyleStatus = false;
        this.resultStyleVitalS= false;
      }, 1500);
    })
    rtsbS.streamData().valueChanges().subscribe(res => {
      this.resultStyleVer= true;
      this.verticalValue = res[0].value;
      setTimeout(() => {
        this.resultStyleVer = false;
      }, 1500);
    })
    rtsbS.streamData().valueChanges().subscribe(res => {
      this.resultStyleHor= true;
      this.horizontalValue = res[0].value;
      setTimeout(() => {
        this.resultStyleHor = false;
      }, 1500);
    })
  }

}
