import { Component, OnInit } from '@angular/core';
import { Driver } from '../driver';
import { F1SimpleServicerService } from '../f1-simple-servicer.service';

@Component({
  selector: 'app-simple-http-service',
  templateUrl: './simple-http-service.component.html',
  styleUrls: ['./simple-http-service.component.css'],
  providers: [F1SimpleServicerService]

})
export class SimpleHttpServiceComponent implements OnInit {

  drivers: Driver[];

  constructor(service: F1SimpleServicerService) { 
    service.getDrivers().subscribe(response => this.drivers = response.json().MRData.DriverTable.Drivers); }

  ngOnInit() {
  }

}
