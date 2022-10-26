import { ChangeContext, Options } from '@angular-slider/ngx-slider';
import { Component } from '@angular/core';
import { RtdbService } from 'src/app/services/rtdb.service';

@Component({
  selector: 'app-control-view',
  templateUrl: './control-view.page.html',
  styleUrls: ['./control-view.page.scss'],
})
export class ControlViewPage   {
  verticalDegree: number = 90;
  horizontalDegree: number = 90;
  optionsV: Options = {
    floor: 0,
    ceil: 180,
    vertical: true,
    hidePointerLabels:true,
    getPointerColor:(value: number): string => { return '#51c5dd'},
  };
  optionsH: Options = {
    floor: 0,
    ceil: 180,
    hidePointerLabels:true,
    getPointerColor:(value: number): string => { return '#51c5dd'},
  };
  
  constructor(private rtdbS: RtdbService) { }
  
  onUserChangeStartV(changeContext: ChangeContext): void {
    this.getChangeContextStringV(changeContext);
  }
  onUserChangeV(changeContext: ChangeContext): void {
    this.getChangeContextStringV(changeContext);
  }

  getChangeContextStringV(changeContext: ChangeContext): void {
    this.rtdbS.vertical().update('degrees',{value:this.verticalDegree});
    console.log('update v to rtdb', changeContext.value);
  }
  onUserChangeStartH(changeContext: ChangeContext): void {
    this.getChangeContextStringH(changeContext);
  }
  onUserChangeH(changeContext: ChangeContext): void {
    this.getChangeContextStringH(changeContext);
  }

  getChangeContextStringH(changeContext: ChangeContext): void {
    this.rtdbS.horizontal().update('degrees',{value: this.horizontalDegree});
    console.log('update h to rtdb', changeContext.value);
  }
  setControls(){
    this.verticalDegree = 90;
    this.horizontalDegree = 90;
    this.rtdbS.vertical().update('degrees',{value:this.verticalDegree});
    this.rtdbS.horizontal().update('degrees',{value:this.horizontalDegree});
  }
}
