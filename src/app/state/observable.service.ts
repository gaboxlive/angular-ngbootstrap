import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ObservableService {
  //El tipo behavior subject almacena el ultimo valor
  //asi que cuando un componente se subscriba a este, obtendrá el último valor emitido
  private loading = new BehaviorSubject<boolean>(false);

  constructor() {}

  //block of getters
  getIsLoading(): Observable<boolean> {
    return this.loading.asObservable();
  }

  //block of setters
  setIsLoading(loading: boolean): void {
    this.loading.next(loading);
  }
}
