import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink], // <-- Imprescindible para la navegación
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header { }