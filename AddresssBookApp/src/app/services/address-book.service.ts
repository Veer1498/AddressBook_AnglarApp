import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddressBookService {

  constructor(private http:HttpClient) { 

  }
  addPerson(person:any){
    return this.http.post("http://localhost:8084/addressbook/create",person);
  }
  getList(){
    return this.http.get("http://localhost:8084/addressbook/getAll")
  }
}
