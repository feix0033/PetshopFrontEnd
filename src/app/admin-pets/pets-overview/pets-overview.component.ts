import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PetDto} from "../shared/pet.dto";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-pets-overview',
  templateUrl: './pets-overview.component.html',
  styleUrls: ['./pets-overview.component.scss']
})
export class PetsOverviewComponent implements OnInit {
  pets:PetDto[] | undefined;
  //pets : PetDto[] = [] ; //can be null

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<PetDto[]>(
      'https://localhost:5001/Pets?Count=10&Page=1'
    ).subscribe(pets => {
      console.log(JSON.stringify(pets))
      this.pets = pets;
    })
  }

}
