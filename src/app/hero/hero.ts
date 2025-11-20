import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { ZardButtonComponent } from '@shared/components/button/button.component';

@Component({
  selector: 'hero',
  imports: [ZardButtonComponent, MatIcon],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {}
