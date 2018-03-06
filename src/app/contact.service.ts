import { Injectable } from '@angular/core';
import { Contact } from './contact';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class ContactService {

  contact : Contact[] = [];

  constructor(private angularFire: AngularFireDatabase) { }

  addContact(contact: Contact){

    this.contact.push(contact);

  }

  onSubmit(contact: Contact){

    const {name,email,tel,message} = contact;
    const date = Date();
    const html = `
      <div>From: ${contact.name} </div>
      <div>Email: <a href="mailto:${contact.email}">${contact.email}</a></div>
      <div>Phone Number: ${contact.tel}</div>
      <div>Date: ${date}</div>
      <div>Message: ${contact.message}</div>
    `;

    let formRequest = {name, email, tel, message, date, html};

    this.angularFire.list('/messages').push(formRequest);

  }

}
