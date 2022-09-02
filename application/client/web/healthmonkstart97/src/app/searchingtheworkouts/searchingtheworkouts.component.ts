import { Component, OnInit } from '@angular/core';
import { SearchingtheworkoutsService } from './searchingtheworkouts.service';

@Component({
  selector: 'app-searchingtheworkouts',
  templateUrl: './searchingtheworkouts.component.html',
  styleUrls: ['./searchingtheworkouts.component.scss'],
})

export class SearchingtheworkoutsComponent implements OnInit {
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
        private searchingtheworkoutsService: SearchingtheworkoutsService,
    ) { }

    ngOnInit() {
        this.workoutentity.created_by = sessionStorage.getItem('email') || ''; 
    }
}