import { Component, signal } from '@angular/core';
import { NeonForm } from './components/neon-form/neon-form';

@Component({
  selector: 'app-root',
  imports: [NeonForm],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('ui-phantasm');
}
