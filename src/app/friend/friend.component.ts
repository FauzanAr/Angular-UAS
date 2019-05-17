import { Data } from './data';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.css']
})
export class FriendComponent implements OnInit {

  dataFriend: any[];
  phoneNumber = "^((\\+62-?)|0)?[0-9]{11}$";
  form = new FormGroup({
    name: new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    email: new FormControl('',[Validators.required, Validators.email]),
    contact: new FormControl('',[Validators.required, Validators.pattern(this.phoneNumber)])
  });



  constructor() { }

  ngOnInit() {
  }

  send()
  {
    new Data(this.form.get('name').value, this.form.get('email').value,this.form.get('contact').value);
    this.dataFriend.push(Data);
    console.log
  }
}
