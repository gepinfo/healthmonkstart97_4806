import { Component, OnInit } from '@angular/core';
import { FrequentlytracksService } from './frequentlytracks.service';

@Component({
  selector: 'app-frequentlytracks',
  templateUrl: './frequentlytracks.component.html',
  styleUrls: ['./frequentlytracks.component.scss'],
})

export class FrequentlytracksComponent implements OnInit {
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
        private frequentlytracksService: FrequentlytracksService,
    ) { }

    ngOnInit() {
        this.workoutentity.created_by = sessionStorage.getItem('email') || ''; 
    }
}