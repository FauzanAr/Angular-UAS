import { AngularFirestore } from '@angular/fire/firestore';
import { Friend } from './friend';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FriendServiceService {

  userUid : any;

  constructor(private firestore:AngularFirestore) { }

  getFriend()
  {
    this.userUid = JSON.parse(localStorage.getItem('user'));
    return this.firestore.collection('users')
    .doc(this.userUid.uid)
    .collection('friends')
    .snapshotChanges();
  }

  createFriend(friend:Friend)
  {
    this.userUid = JSON.parse(localStorage.getItem('user'));
    return this.firestore.collection('users')
    .doc(this.userUid.uid)
    .collection('friends')
    .add(friend);
  }

  deleteFriend(friendId:string)
  {
    this.firestore.doc('users/'+this.userUid.uid+'/friends/'+friendId).delete();
  }
}
