import { Component, OnInit } from '@angular/core';
import { SwimmingbackstokeService } from './swimmingbackstoke.service';

@Component({
  selector: 'app-swimmingbackstoke',
  templateUrl: './swimmingbackstoke.component.html',
  styleUrls: ['./swimmingbackstoke.component.scss'],
})

export class SwimmingbackstokeComponent implements OnInit {
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
        private swimmingbackstokeService: SwimmingbackstokeService,
    ) { }

    ngOnInit() {
        this.workoutentity.created_by = sessionStorage.getItem('email') || ''; 
    }
}