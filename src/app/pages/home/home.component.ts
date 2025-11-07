import { Component, inject } from '@angular/core';
import { AppStore } from '../../state/appStore';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  appStore = inject(AppStore);
}
