import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';

type Planet = {
  name: string;
  diameterKm: number;
  gravity: number;          // m/s²
  distanceAu: number;       // UA
  orbitalDays: number;      // jours
  moons: number;
};

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TableModule],
  template: `
    <div class="app-shell">
      <h1>Les 8 planètes</h1>
      <div class="card">
        <p-table [value]="planets" dataKey="name" [tableStyle]="{ 'min-width': '60rem' }">
          <ng-template pTemplate="header">
            <tr>
              <th>Planète</th>
              <th>Diamètre (km)</th>
              <th>Gravité (m/s²)</th>
              <th>Distance (UA)</th>
              <th>Période orbitale (j)</th>
              <th>Satellites</th>
            </tr>
          </ng-template>
          <ng-template pTemplate="body" let-p>
            <tr>
              <td>{{ p.name }}</td>
              <td>{{ p.diameterKm | number:'1.0-0' }}</td>
              <td>{{ p.gravity | number:'1.1-1' }}</td>
              <td>{{ p.distanceAu | number:'1.2-2' }}</td>
              <td>{{ p.orbitalDays | number:'1.0-0' }}</td>
              <td>{{ p.moons }}</td>
            </tr>
          </ng-template>
        </p-table>
      </div>
    </div>
  `
})
export class AppComponent {
  planets: Planet[] = [
    { name: 'Mercure',  diameterKm: 4879,  gravity: 3.7,  distanceAu: 0.39, orbitalDays: 88,    moons: 0 },
    { name: 'Vénus',    diameterKm: 12104, gravity: 8.87, distanceAu: 0.72, orbitalDays: 225,   moons: 0 },
    { name: 'Terre',    diameterKm: 12742, gravity: 9.81, distanceAu: 1.00, orbitalDays: 365,   moons: 1 },
    { name: 'Mars',     diameterKm: 6779,  gravity: 3.71, distanceAu: 1.52, orbitalDays: 687,   moons: 2 },
    { name: 'Jupiter',  diameterKm: 139820,gravity: 24.79,distanceAu: 5.20, orbitalDays: 4333,  moons: 95 },
    { name: 'Saturne',  diameterKm: 116460,gravity: 10.44,distanceAu: 9.58, orbitalDays: 10759, moons: 83 },
    { name: 'Uranus',   diameterKm: 50724, gravity: 8.69, distanceAu: 19.18,orbitalDays: 30687, moons: 27 },
    { name: 'Neptune',  diameterKm: 49244, gravity: 11.15,distanceAu: 30.07,orbitalDays: 60190, moons: 14 }
  ];
}
