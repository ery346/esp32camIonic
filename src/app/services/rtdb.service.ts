import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Observable, } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RtdbService {
  itemsRefIP: AngularFireList<any>;
  itemIp: Observable<any[]>;
  itemsRefConected: AngularFireList<any>;
  itemConected: Observable<any[]>;
  itemsRefFlash: AngularFireList<any>;
  itemsRefUpDown: AngularFireList<any>;
  itemsRefLeftRight: AngularFireList<any>;
  itemsRefUpdate: AngularFireList<any>;
  time:any;
  constructor(private db: AngularFireDatabase,) {
     this.isAlive()}

  ip(){
    this.itemsRefIP = this.db.list('httpCam');
    this.itemIp = this.itemsRefIP.snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() })),
      )
    );
    
    return this.itemsRefIP.valueChanges();
  }

  flash(){
    this.itemsRefFlash = this.db.list('flash');
    return this.itemsRefFlash;
  }

  vertical(){
    this.itemsRefUpDown = this.db.list('vertical');
    return this.itemsRefUpDown;
  }

  horizontal(){
    this.itemsRefLeftRight = this.db.list('horizontal');
    return this.itemsRefLeftRight;
  }

  statusConected(){
    this.itemConected = this.itemsRefConected.snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() })),
      )
    );
    
    return this.itemsRefConected.valueChanges();
  }

  isAlive(){
    this.itemsRefConected = this.db.list('isAlive');
    this.itemsRefConected.snapshotChanges().subscribe(res => {
      clearTimeout(this.time);
      this.time = setTimeout(() => {
        this.updateStatus()
      }, 10000)
    })

  }

  updateStatus(){
    this.itemsRefUpdate = this.db.list('isAlive');
    this.itemsRefUpdate.update('status',{value:false});
  }
}
