import { ContactusService } from './../shared/services/contactus.service';
import { ContactUs } from './../shared/services/contactus';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  contacts: ContactUs[];
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('',[Validators.required, Validators.email]),
    message: new FormControl('',Validators.required)
  });
  constructor(private contactService:ContactusService) { }

  ngOnInit() {
    this.contactService.getContact().subscribe(data => {
      this.contacts = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as ContactUs;
      })
      console.log(this.contacts)
    })
  }

  send()
  {
    this.contactService.createContact(this.form.value)
    this.form.reset();
  }

}
