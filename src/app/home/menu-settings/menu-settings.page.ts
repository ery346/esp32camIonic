import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {lengEsEnMenu, resolution } from 'src/app/interface/obj.interface';
import { TranslationService } from 'src/app/services/translation.service';

@Component({
  selector: 'app-menu-settings',
  templateUrl: './menu-settings.page.html',
  styleUrls: ['./menu-settings.page.scss'],
})
export class MenuSettingsPage  {
  @Output() colorEmit = new EventEmitter<string>;
  @Output() timmerEmit = new EventEmitter<number>;
  @Output() resolutionEmit = new EventEmitter<resolution>;
  @Output() translationEmit = new EventEmitter<string>;
  colorMode: string = 'claro';
  resolution: resolution;
  lenguageOp: lengEsEnMenu;
  constructor( private lenguageS: TranslationService) {
    this.lenguageOp = lenguageS.menuSpanish();
   }

  changeTheme(ev:any){
    this.colorMode = ev.detail.value;
    this.colorEmit.emit(this.colorMode);
  }
  changeTimmer(ev:any){
    this.timmerEmit.emit(ev.detail.value);
  }
  changeResolution(ev:any){
    switch (ev.detail.value) {
      case 'p':
        this.resolutionEmit.emit(this.resolution = {width: '276', height: '230'});
        break;
    
      case 'm':
        this.resolutionEmit.emit(this.resolution = {width: '296', height: '255'});
        break;
      case 'g':
        this.resolutionEmit.emit(this.resolution = {width: '310', height: '270'});
        break;
      default:
        break;
    }
    // this.resolutionEmit.emit(ev.detail.value);
  }
  changeLenguage(ev:any){
    this.translationEmit.emit(ev.detail.value);
      switch (ev.detail.value) {
        case 'es':
         this.lenguageOp = this.lenguageS.menuSpanish();
          break;
      
        case 'en':
          this.lenguageOp = this.lenguageS.menuEnglish();

            break;
        default:
          break;
      }
  }
}
