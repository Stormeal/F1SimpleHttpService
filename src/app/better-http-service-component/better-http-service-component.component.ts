import { Component, OnInit } from '@angular/core';

import { Driver } from '../driver';
import { F1BetterService } from '../f1-simple-servicer.service';

@Component({
  selector: 'app-better-http-service-component',
  templateUrl: './better-http-service-component.component.html',
  styleUrls: ['./better-http-service-component.component.css'],
  providers: [F1BetterService]
})
export class BetterHttpServiceComponentComponent  {

  public drivers: Driver[];

  constructor(private service: F1BetterService) {
    service.getDrivers().subscribe(drivers => this.drivers = drivers);
    }

  public addSubscribtion() {
    this.service.getDrivers().subscribe(drivers => console.log(`Found ${drivers.length} drivers`));
  }

}
