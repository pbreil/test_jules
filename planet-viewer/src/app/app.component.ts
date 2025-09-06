import { Component } from '@angular/core';
import { PlanetTableComponent } from './planet-table/planet-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PlanetTableComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'planet-viewer';
}
