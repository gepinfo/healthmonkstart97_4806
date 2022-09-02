import { Component, OnInit } from '@angular/core';
import { SwimmingbackstokedetailsService } from './swimmingbackstokedetails.service';

@Component({
  selector: 'app-swimmingbackstokedetails',
  templateUrl: './swimmingbackstokedetails.component.html',
  styleUrls: ['./swimmingbackstokedetails.component.scss'],
})

export class SwimmingbackstokedetailsComponent implements OnInit {
    public workoutentity = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        time: '',
        name: '',
        laps: '',
    }

    constructor (
        private swimmingbackstokedetailsService: SwimmingbackstokedetailsService,
    ) { }

    ngOnInit() {
        this.workoutentity.created_by = sessionStorage.getItem('email') || ''; 
    }
}