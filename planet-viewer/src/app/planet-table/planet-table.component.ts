import { Component, OnInit } from '@angular/core';
import { PlanetService } from '../planet.service';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-planet-table',
  templateUrl: './planet-table.component.html',
  styleUrls: ['./planet-table.component.css'],
  standalone: true,
  imports: [CommonModule, TableModule, ButtonModule]
})
export class PlanetTableComponent implements OnInit {

  planets: any[] = [];

  constructor(private planetService: PlanetService) { }

  ngOnInit(): void {
    this.planets = this.planetService.getPlanets();
  }

}
