import { Component, inject, effect, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AppStore } from '../../state/appStore';
import { toObservable } from '@angular/core/rxjs-interop';
import { filter, Observable } from 'rxjs';

@Component({
  selector: 'app-nav',
  imports: [RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent {
  appStore = inject(AppStore);
  router = inject(Router);

  login = (logged: boolean, name: string, email: string) => {
    this.appStore.setIsLogged(logged, name, email);
  };
}
