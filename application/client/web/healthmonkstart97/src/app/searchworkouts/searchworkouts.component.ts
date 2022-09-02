import { Component, OnInit } from '@angular/core';
import { SearchworkoutsService } from './searchworkouts.service';

@Component({
  selector: 'app-searchworkouts',
  templateUrl: './searchworkouts.component.html',
  styleUrls: ['./searchworkouts.component.scss'],
})

export class SearchworkoutsComponent implements OnInit {
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
        private searchworkoutsService: SearchworkoutsService,
    ) { }

    ngOnInit() {
        this.workoutentity.created_by = sessionStorage.getItem('email') || ''; 
    }
}