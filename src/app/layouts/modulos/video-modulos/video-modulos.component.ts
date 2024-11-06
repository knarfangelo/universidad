import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-video-modulos',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  template: `
    <header>
      <img class="fondo" src="backgrounds/fondo-secundario.jpg" alt="fondo Secundario">
      <main>
        <img class="logo" src="logo-nombre.png" alt="logo">
        <button routerLink="/cuestionario"  class="video"></button>
      </main>
    </header>
  `,
  styleUrl: './video-modulos.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideoModulosComponent { }
