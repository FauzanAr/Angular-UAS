import { AngularFirestore } from '@angular/fire/firestore';
import { ContactUs } from './contactus';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactusService {

  constructor(private firestore: AngularFirestore) { }

  getContact()
  {
    return this.firestore.collection('contactUs').snapshotChanges();
  }

  createContact(contact:ContactUs)
  {
    return this.firestore.collection('contactUs').add(contact);
  }

  updateContact(contact:ContactUs)
  {
    delete contact.id;
    this.firestore.doc('contactUs/'+contact.id).update(contact);
  }

  deleteContact(contactId:string)
  {
    this.firestore.doc('contactUs/'+contactId).delete();
  }
}
