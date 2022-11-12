import { Component } from '@angular/core';
import { RtdbService } from '../services/rtdb.service';
import { lengEsEnHome, resolution } from '../interface/obj.interface';
import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  ip: String ='http://';
  flashState: boolean = false ;
  evIframe:number = 0;
  hideSpinner: boolean = false;
  ipRtdb: string = '';
  isAlive: boolean;
  colorMode:string='claro'; 
  timmer: number = 3000;
  resolution: resolution = {width: '296', height: '255'};
  lenguage: lengEsEnHome;

  constructor(private rtdbS: RtdbService, 
              private lenguageS: TranslationService) {
    rtdbS.ip().subscribe(res => {
      this.ipRtdb = `http://${res[0]}/`;
      this.ip = this.ipRtdb;
    });
    rtdbS.statusConected().subscribe(res => {
      this.isAlive = res[0].value;
    });
    this.lenguage = this.lenguageS.homeSpanish();
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
       this.lenguage = this.lenguageS.homeSpanish();

        break;
    
      case 'en':
        this.lenguage = this.lenguageS.homeEnglish();

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
   
   logout(){
    
   }
  flash(){
    this.flashState = true;
    this.rtdbS.streamData().update('data/flash', {value:'on'})
    setTimeout(() => {
      this.flashState = false;
      this.rtdbS.streamData().update('data/flash', {value:'off'})
    }, this.timmer);
  }

}
