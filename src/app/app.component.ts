import { Component, computed, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { toObservable } from '@angular/core/rxjs-interop';
import { AppStore } from './state/appStore';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-base';
  appStore = inject(AppStore);

  //Esto es lo mejor que se puede hacer en lugar de usar suscripciones
  observedValue = computed(() => {
    console.log('Actualilzación de isLogged: ', this.appStore.isLogged());
    return this.appStore.isLogged();
  });

  /*Esto funciona
  constructor() {
    toObservable(this.appStore.isLogged)
      .pipe(filter((value) => value !== null)) // Example RxJS operator
      .subscribe((newValue) => {
        this.observedValue = newValue;
        console.log('Signal actualiza valor de isLogged:', newValue);
      });
  }*/
}
