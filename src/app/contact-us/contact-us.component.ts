import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  clicked = false;
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('',[Validators.required, Validators.email]),
    message: new FormControl('',Validators.required)
  });
  constructor() { }

  ngOnInit() {
  }

  send()
  {
    this.clicked=true;
  }

  close()
  {
    this.clicked=false;
    this.form.reset();
  }

  getName(){return this.form.get('name');}
  getEmail(){return this.form.get('email');}
  getMessage(){return this.form.get('message');}
}
