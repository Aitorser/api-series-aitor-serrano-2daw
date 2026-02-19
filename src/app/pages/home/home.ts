import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { SeriesService } from '../../services/series'; 
import { Serie } from '../../models/serie';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AsyncPipe], 
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  series$!: Observable<Serie[]>;

  constructor(private seriesService: SeriesService) {
    this.series$ = this.seriesService.getAll();
  }
}