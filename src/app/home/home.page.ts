import { Component } from '@angular/core';
import { RangeCustomEvent, RangeValue } from '@ionic/core';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  ip: string = 'http://192.168.0.9'
  verticalDegree: number = 90;
  horizontalDegree: RangeValue = 90;
  flashState: string = 'Apagado';
  evIframe:number = 0;
  hideSpinner: boolean = false;
  constructor() {}
  doRefresh() {
    this.ip = '';
    setTimeout(() => {
      this.ip = 'http://192.168.0.9';
    }, 50);
  }

  up(deg: number){
    this.verticalDegree = this.verticalDegree + deg;
    if (this.verticalDegree >= 180) {
      this.verticalDegree = 180;
      // console.log(this.verticalDegree,'nada');
      // return
    }
    console.log(this.verticalDegree );
  }
  down(deg: number){
    this.verticalDegree = this.verticalDegree - deg;
    if (this.verticalDegree <= 0) {
      this.verticalDegree = 0;
      // console.log(this.verticalDegree,'nada');
      // return
    }
    console.log(this.verticalDegree,'send');
    
  }

  flash(){
    this.flashState = 'Encendido';
    setTimeout(() => {
      this.flashState = 'Apagado';
    }, 2000);
  }
  setControls(){
    this.verticalDegree = 90;
    this.horizontalDegree = 90;
  }
  horizontalDeg(ev: Event) {
    this.horizontalDegree = (ev as RangeCustomEvent).detail.value;
  }
  evChange(val: number){
   this.evIframe = this.evIframe + val;
    if (this.evIframe === 1) {
      this.hideSpinner = false;
    }else if(this.evIframe === 2){
      this.hideSpinner = true;
      this.evIframe = 0;
    }
  }
}
