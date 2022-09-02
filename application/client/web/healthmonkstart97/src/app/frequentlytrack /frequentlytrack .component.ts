import { Component, OnInit } from '@angular/core';
import { Frequentlytrack Service } from './frequentlytrack .service';

@Component({
  selector: 'app-frequentlytrack ',
  templateUrl: './frequentlytrack .component.html',
  styleUrls: ['./frequentlytrack .component.scss'],
})

export class Frequentlytrack Component implements OnInit {
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
        private frequentlytrack Service: Frequentlytrack Service,
    ) { }

    ngOnInit() {
        this.workoutentity.created_by = sessionStorage.getItem('email') || ''; 
    }
}