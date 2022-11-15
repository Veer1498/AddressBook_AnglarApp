import { Component, OnInit } from '@angular/core';
import { AddressBookService } from 'src/app/services/address-book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private service:AddressBookService
  ) { }
  list:any;
  ngOnInit(): void {
    this.service.getList().subscribe((data:any) =>{
      this.list = data.data;
    })
  }

}
