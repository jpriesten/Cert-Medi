import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  contact = new Contact(null,null,null,null);

  constructor(private contactService: ContactService) { }

  addContact(name:string, email:string, tel:number, message:string){
    this.contact = new Contact(name,email,tel,message);
    this.contactService.addContact(this.contact);
  }

  onSubmit(){
    this.contactService.onSubmit(this.contact);

  }

  ngOnInit() {
  }

}
