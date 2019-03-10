import { Component } from '@angular/core';
import {AngularVersionInformationService} from './shared/angular-version-information.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-firefox-grid';
  angularVersion: string;
  constructor(private ngVersionService: AngularVersionInformationService){
    this.angularVersion = ngVersionService.versionFull;
  }
}
