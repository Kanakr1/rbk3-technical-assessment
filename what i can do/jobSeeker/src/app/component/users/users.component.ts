import {Component, OnInit} from '@angular/core'
import {ServiceComponent} from '../../services/service.component'


@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  
})
export class UsersComponent implements OnInit{
users;
name;
email;

constructor(private serviceComponent: ServiceComponent){}

ngOnInit(){
this.serviceComponent.getUsers().subscribe((users) => this.users = users);
}

let newUser ={
this.name: name,
this.email: email
}

AddOnSubmit(user){
this.users.push(user)

}

}