import {Component, OnInit} from '@angular/core'
import {ServiceComponent} from '../../services/service.component'


@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  
})
export class UsersComponent implements OnInit{
users;
constructor(private serviceComponent: ServiceComponent){}

ngOnInit(){
this.serviceComponent.getUsers().subscribe((users) => console.log(users));
}


}