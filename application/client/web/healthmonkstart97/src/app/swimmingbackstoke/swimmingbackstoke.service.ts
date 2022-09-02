import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SharedService } from '../../shared/shared.service';

@Injectable({
    providedIn: 'root'
})

export class SwimmingbackstokeService {
    constructor(
        private sharedService: SharedService,
        private http: HttpClient,
    ) { }

}