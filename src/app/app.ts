import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, Header, Footer],
  templateUrl: './app.html',
})
export class App {
  protected title = 'teste-incaas';
}
