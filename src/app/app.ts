import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ZardButtonComponent } from '@shared/components/button/button.component';
import { buttonVariants } from '@shared/components/button/button.variants';
import { Header } from './header/header';

@Component({
  selector: 'app-root',
  imports: [Header, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('kinsta');
}
