import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-modulos',
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
      <section class="modulos">
        <button routerLink="/video-modulos">módulo <br> 1</button>
        <button routerLink="/video-modulos">módulo <br> 2</button>
        <button routerLink="/video-modulos">módulo <br> 3</button>
        <button routerLink="/video-modulos">módulo <br> 4</button>
        <button routerLink="/video-modulos">módulo <br> 5</button>
        <button routerLink="/video-modulos">módulo <br> 6</button>
      </section>
    </main> 
  </header>
  `,
  styleUrl: './modulos.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModulosComponent { }
