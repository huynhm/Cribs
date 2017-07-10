import { Component, OnInit, ViewChild } from '@angular/core';
import { CribsService } from './../services/cribs.service';
import { NgForm} from '@angular/forms';

@Component({
  selector: 'app-add-listing-form',
  templateUrl: './add-listing-form.component.html',
  styleUrls: ['./add-listing-form.component.css']
})
export class AddListingFormComponent implements OnInit {

  
	 propertyTypes: Array<string> = ['House', 'Condo', 'Duplex']; 

  constructor(public cribsService: CribsService) { }
  @ViewChild('newCribForm') newCribForm: NgForm;
  ngOnInit() {

  }
  onCribSubmit(data): void {
  	this.cribsService.addCrib(data);
  	this.newCribForm.reset();


  }
  


}

/*

      <div class="form-group col-sm-4">
        <label for="property-type" class="">Property Type</label>
        <select
          name="type"
          id="property-type"
          class="form-control"
          ngModel
          required>
          <option
            *ngFor="let type of propertyTypes"
            [value]="type">
              {{ utilService.capitalize(type) }}
          </option>
        </select>
      </div>

*/