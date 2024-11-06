import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-inicio-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  template: `
  <header>
      <img class="fondo" src="backgrounds/fondo-principal.jpg" alt="background-universidad">
      <main>
        <img class="logo" src="logo-nombre.png" alt="">
        <p>PLATAFORMA DE TEST VOCACIONAL</p>
        <input type="text" placeholder="USER">
        <input type="password" placeholder="PASS">
        <button routerLink="modulos">INGRESAR</button>
        <section class="add-buttons">
          <button>CREAR CUENTA</button>
          <button>OLVIDÉ MI CLAVE</button>
        </section>
      </main>
  </header>
  `,
  styleUrl: './inicioLayout.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InicioLayoutComponent { }
