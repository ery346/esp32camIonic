import { Injectable } from '@angular/core';
import { lengEsEnMenu, lengEsEnHome } from '../interface/obj.interface';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  menuLenguageOp: lengEsEnMenu;
  homeLenguageOp: lengEsEnHome;
  constructor() { }

  menuSpanish(){
    return  this.menuLenguageOp = {
      title: 'Confifguracion',
      titleMenu1: 'Tema',
      titleMenu2: 'Contador del flash',
      titleMenu3: 'Resolucion de vista',
      titleMenu4: 'Idioma',
      btnMenu1: 'Claro',
      btnMenu2: 'Obscuro',
      resolutionMenu1: 'Pequeño',
      resolutionMenu2: 'Mediano',
      resolutionMenu3: 'Grande',
    }
  }

  menuEnglish(){
    return this.menuLenguageOp = {
      title: 'Settings',
      titleMenu1: 'Theme',
      titleMenu2: 'Flash`s Timmer',
      titleMenu3: 'View`s Resolutions',
      titleMenu4: 'Lenguage',
      btnMenu1: 'Light',
      btnMenu2: 'Dark',
      resolutionMenu1:'Small',
      resolutionMenu2:'Medium',
      resolutionMenu3:'Large',
    }
  }

  homeSpanish(){
    return this.homeLenguageOp = {
      cardTitle1: 'Camara',
      cardTitle2: 'Control de visualizacion',
      btnCard1: 'Refrescar',
      labelFlashStatus1: 'Encendido',
      labelFlashStatus2: 'Apagado',
      labelHorizontal: 'Horizontal',
      labelVertical: 'Vertical'
    }
  }

  homeEnglish(){
    return this.homeLenguageOp = {
      cardTitle1: 'Camera',
      cardTitle2: 'View`s control',
      btnCard1: 'Refresh',
      labelFlashStatus1: 'On',
      labelFlashStatus2: 'Off',
      labelHorizontal: 'Horizontal',
      labelVertical: 'Vertical'
    }
  }
}
