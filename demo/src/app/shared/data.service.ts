
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Player } from '../medel/player';
import { Winners } from '../medel/player';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  getAllPlayers() {
    return this.afs.collection('/Players').snapshotChanges();
  }


  constructor(private afs: AngularFirestore, private fireStorage: AngularFireStorage) { }

  getwinnersList() {
    return this.afs.collection('/Winners').snapshotChanges();
  }

  // add student

  addPlayer(winner: Winners) {
    winner.Id = this.afs.createId();
    return this.afs.collection('/Winners').add(winner);
  }


}


