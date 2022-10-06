import { Component } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  ip: string = 'http://192.168.0.9'
  constructor() {
  }
  doRefresh() {
    this.ip = '';
    setTimeout(() => {
      this.ip = 'http://192.168.0.9';
    }, 50);

  }

  changeifra(e){
    console.log(e);

  }
}
