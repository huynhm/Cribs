import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { CribsService } from './../services/cribs.service'
//import 'rxjs/add/operator/map';
//import { cribs } from './../data/cribs';


@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {

	cribs: Array<any>;
	error: string;
  sortField: string = 'area';
  sortDirection: string = 'asc';
  sortFields: Array<string> = ['price', 'area', 'bedrooms', 'bathrooms', 'type'];

  constructor(private http: Http, private cribsService: CribsService) { }

  ngOnInit() {

  	this.cribsService.getAllCribs()
  		.subscribe(
  			data => this.cribs = data,
  			error => this.error = error.statusText
  		);
    this.cribsService.newCribSubject.subscribe(
        data => this.cribs = [data, ...this.cribs]
      )
  }

}
