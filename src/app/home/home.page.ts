import { Component } from '@angular/core';
import { RtdbService } from '../services/rtdb.service';
import { resolution } from '../interface/obj.interface';
import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  ip: String ='http://';
  flashState: string = 'Apagado';
  evIframe:number = 0;
  hideSpinner: boolean = false;
  ipRtdb: string = '';
  isAlive: boolean;
  colorMode:string='claro'; 
  timmer: number;
  resolution: resolution = {width: '296', height: '255'};

  constructor(private rtdbS: RtdbService, private lenguageS: TranslationService) {
    rtdbS.ip().subscribe(res => {
      this.ipRtdb = `http://${res[0]}/`;
      this.ip = this.ipRtdb;
    });
    rtdbS.statusConected().subscribe(res => {
      this.isAlive = res[0].value;
    });
  }
  prosessColorMode(value:string){
    this.colorMode = value;
  }
  prosessTimmer(value:number){
    this.timmer = value;
  }
  prosessResolution(value:resolution){
    this.resolution = value;
  }
  prosessTranslation(value:string){
    switch (value) {
      case 'es':
      //  this.lenguageOp = this.lenguageS.menuSpanish();
        break;
    
      case 'en':
        // this.lenguageOp = this.lenguageS.menuEnglish();

          break;
      default:
        break;
    }
  }
  doRefresh() {
    this.ip = '';
    this.evIframe = 1;
    setTimeout(() => {
      this.ip = this.ipRtdb;
    }, 500);
  }


  flash(){
    this.flashState = 'Encendido';
    this.rtdbS.flash().update('key1', {value:'on'})
    setTimeout(() => {
      this.flashState = 'Apagado';
      this.rtdbS.flash().update('key1', {value:'off'})
    }, this.timmer);
  }


  evFrameChange(val: number){
   this.evIframe = this.evIframe + val;
  //  console.log(this.evIframe);
   
    if (this.evIframe === 1) {      
      this.hideSpinner = false;
      // console.log('on');
    }else if(this.evIframe === 2){
      this.hideSpinner = false;
      // console.log('on');
    }
    else if(this.evIframe === 3){
      this.hideSpinner = true;
      // console.log('off');
    }
  }

}
