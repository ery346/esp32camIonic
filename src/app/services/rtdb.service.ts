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
  itemsRefStream: AngularFireList<any>;
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

  streamData(){
    this.itemsRefStream = this.db.list('stream');
    return this.itemsRefStream;
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
    this.statusConected().subscribe(res => {
      // TODO: 
      console.log(res);
      
      clearTimeout(this.time);
      this.time = setTimeout(() => {
        this.updateStatus();
        console.log('update false');
      }, 12000)
    });
    // this.itemsRefConected.snapshotChanges().subscribe(res => {
    //   // TODO: 
    //   console.log(res);
      
    //   clearTimeout(this.time);
    //   this.time = setTimeout(() => {
    //     this.updateStatus();
    //     console.log('update false');
    //   }, 10000)
    // })

  }

  updateStatus(){
    this.itemsRefUpdate = this.db.list('isAlive');
    this.itemsRefUpdate.update('status',{value:false});
  }
}
