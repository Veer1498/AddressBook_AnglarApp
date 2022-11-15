import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.scss']
})
export class AddPersonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public cityList = [
    { value: "Amaravati" },
    { value: "Itanagar" },
    { value: "Dispur" },
    { value: "Patna" },
    { value: "Raipur" },
    { value: "Panaji" },
    { value: "Gandhinagar" },
    { value: "Chandigarh" },
    { value: "Shimla" },
    { value: "Ranchi" },
    { value: "Bengaluru" },
    { value: "Thiruvananthapuram" },
    { value: "Bhopal" },
    { value: "Mumbai" },
    { value: "Nagpur" },
    { value: "Pune" },
    { value: "Imphal" },
    { value: "Shillong" },
    { value: "Aizawl" },
    { value: "Kohima" },
    { value: "Bhubaneswar" },
    { value: "Chandigarh" },
    { value: "Jaipur" },
    { value: "Gangtok" },
    { value: "Chennai" },
    { value: "Hyderabad" },
    { value: "Agartala" },
    { value: "Lucknow" },
    { value: "Dehradun" },
    { value: "Kolkate" }
  ];

  public stateList = [
    { value: "Andhra Pradesh" },
    { value: "Arunachal Pradesh	" },
    { value: "Assam	" },
    { value: "Bihar	" },
    { value: "Chhattisgarh" },
    { value: "Goa" },
    { value: "Gujarat" },
    { value: "Haryana" },
    { value: "Himachal Pradesh" },
    { value: "Jharkhand" },
    { value: "Karnataka" },
    { value: "Kerala" },
    { value: "Madhya Pradesh" },
    { value: "Maharashtra" },
    { value: "Manipur" },
    { value: "Meghalaya" },
    { value: "Mizoram" },
    { value: "Nagaland" },
    { value: "Odisha" },
    { value: "Punjab" },
    { value: "Rajasthan" },
    { value: "Sikkim" },
    { value: "Tamil Nadu" },
    { value: "Telangana" },
    { value: "Tripura" },
    { value: "	Uttar Pradesh" },
    { value: "Uttarakhand" },
    { value: "West Bengal" }
  ];

}
