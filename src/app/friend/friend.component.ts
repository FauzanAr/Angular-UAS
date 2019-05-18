import { FriendServiceService } from './../shared/services/friend-service.service';
import { Friend } from './../shared/services/friend';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.css']
})
export class FriendComponent implements OnInit {

  dataFriend: Friend[];
  phoneNumber = "^((\\+62-?)|0)?[0-9]{11}$";
  form = new FormGroup({
    name: new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    email: new FormControl('',[Validators.required, Validators.email]),
    contact: new FormControl('',[Validators.required, Validators.pattern(this.phoneNumber)])
  });



  constructor(private friendService:FriendServiceService) { }

  ngOnInit() {
    this.friendService.getFriend().subscribe(data => {
      this.dataFriend = data.map(e => {
        return{
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        }as Friend;
      })
      console.log(this.dataFriend)
    })
  }

  send()
  {
    this.friendService.createFriend(this.form.value)
    this.form.reset();
  }

  delete(id){
    this.friendService.deleteFriend(id);
  }

}
