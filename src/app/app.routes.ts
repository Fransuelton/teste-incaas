import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Registration } from './components/registration/registration';
import { Listing } from './components/listing/listing';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'Início – Cadastro e Consulta de Processos | DataJud CNJ',
  },
  {
    path: 'partes-interessadas',
    component: Registration,
    title: 'Cadastro de Partes Interessadas | DataJud CNJ',
  },
  {
    path: 'consulta-processos',
    component: Listing,
    title: 'Consulta Pública de Processos – TRF1 | DataJud CNJ',
  },
];
