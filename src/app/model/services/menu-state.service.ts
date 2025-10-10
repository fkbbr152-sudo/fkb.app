import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuStateService {
  private menuState = new BehaviorSubject<boolean>(true); // true = aberto, false = fechado
  menuState$ = this.menuState.asObservable();

  toggleMenu() {
    this.menuState.next(!this.menuState.value);
  }

  setMenuState(state: boolean) {
    console.log('Menu State Updated:', state);
    this.menuState.next(state);
  }
}
