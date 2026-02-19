import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SeriesService } from '../../services/series';
import { Serie } from '../../models/serie';

@Component({
  selector: 'app-new',
  standalone: true,
  imports: [ReactiveFormsModule], 
  templateUrl: './new.html',
  styleUrl: './new.css'
})
export class New {
  form = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(3)]),
    channel: new FormControl('', [Validators.required]),
    rating: new FormControl<number | null>(null, [Validators.required, Validators.min(0), Validators.max(10)])
  });

  constructor(
    private seriesService: SeriesService,
    private router: Router
  ) {}

  get f() { return this.form.controls; }

  onSubmit() {
    if (this.form.valid) {
      const payload: Serie = {
        title: this.form.value.title!,
        channel: this.form.value.channel!,
        rating: Number(this.form.value.rating)
      };

      this.seriesService.create(payload).subscribe({
        next: (res) => {
          alert(`¡Serie creada con éxito! El ID asignado es: ${res.id}`);
          this.router.navigate(['/home']);
        },
        error: (err) => {
          console.error('Error al crear la serie:', err);
          alert('Hubo un error al crear la serie');
        }
      });
    }
  }
}