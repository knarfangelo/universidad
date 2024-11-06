import { Routes } from '@angular/router';
import { InicioLayoutComponent } from './layouts/inicioLayout/inicioLayout.component';
import { ModulosComponent } from './layouts/modulos/modulos.component';
import { VideoModulosComponent } from './layouts/modulos/video-modulos/video-modulos.component';
import { CuestionarioComponent } from './layouts/modulos/video-modulos/cuestionario/cuestionario.component';

export const routes: Routes = [
    { path: '', component: InicioLayoutComponent },
    { path: 'modulos', component: ModulosComponent },
    { path: 'video-modulos', component: VideoModulosComponent },
    { path: 'cuestionario', component: CuestionarioComponent },
];
