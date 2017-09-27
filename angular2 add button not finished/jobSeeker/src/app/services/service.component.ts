import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()

export class ServiceComponent {

constructor(private http: Http){

}

getUsers(){
return this.http.get('http://localhost:3000/api/users').map(
res => res.json()
)
}

saveUsers(users){
let headers = new Headers();
headers.append('Content-Type','application/json');
return this.http.post('http://localhost:3000/api/users', users, {headers: headers}).map(users => users.json())
}
}