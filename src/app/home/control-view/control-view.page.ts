import { ChangeContext, Options } from '@angular-slider/ngx-slider';
import { Component, Input } from '@angular/core';
import { RtdbService } from 'src/app/services/rtdb.service';
import { lengEsEnHome } from '../../interface/obj.interface';

@Component({
  selector: 'app-control-view',
  templateUrl: './control-view.page.html',
  styleUrls: ['./control-view.page.scss'],
})
export class ControlViewPage   {
  @Input() lenguage: lengEsEnHome;
  verticalDegree: number = 90;
  horizontalDegree: number = 90;
  optionsV: Options = {
    floor: 0,
    ceil: 180,
    vertical: true,
    hidePointerLabels:true,
    getPointerColor:(): string => { return '#51c5dd'},
  };
  optionsH: Options = {
    floor: 0,
    ceil: 180,
    hidePointerLabels:true,
    getPointerColor:(): string => { return '#51c5dd'},
  };
  
  constructor(private rtdbS: RtdbService) { }
  
  onUserChangeStartV(changeContext: ChangeContext): void {
    this.getChangeContextStringV(changeContext);
  }
  onUserChangeV(changeContext: ChangeContext): void {
    this.getChangeContextStringV(changeContext);
  }

  getChangeContextStringV(changeContext: ChangeContext): void {
    this.rtdbS.streamData().update('data/vertical',{value:this.verticalDegree});
  }
  onUserChangeStartH(changeContext: ChangeContext): void {
    this.getChangeContextStringH(changeContext);
  }
  onUserChangeH(changeContext: ChangeContext): void {
    this.getChangeContextStringH(changeContext);
  }

  getChangeContextStringH(changeContext: ChangeContext): void {
    this.rtdbS.streamData().update('data/horizontal',{value: this.horizontalDegree});
  }
  setControls(){
    this.verticalDegree = 90;
    this.horizontalDegree = 90;
    this.rtdbS.streamData().update('data/vertical',{value:this.verticalDegree});
    this.rtdbS.streamData().update('data/horizontal',{value:this.horizontalDegree});
  }
}
