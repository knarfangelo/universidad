import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-cuestionario',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
    <header>
      <img class="fondo" src="backgrounds/fondo-secundario.jpg" alt="fondo Secundario">
      <main>
      <img class="logo" src="logo-nombre.png" alt="">
      <section class="contenido">
      <h1 class="titulo">DE QUE FORMA ES LA TIERRA?</h1>
      <form class="formulario">
  <label>
    <input type="radio" name="option" value="1">
    CUADRADA
  </label>
  <label>
    <input type="radio" name="option" value="2">
    TRIANGULAR
  </label>
  <label>
    <input type="radio" name="option" value="3">
    REDONDA
  </label>
</form></section>
</main>
      <section class="modal">
        
      </section>
    </header>
  `,
  styleUrl: './cuestionario.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CuestionarioComponent { }
