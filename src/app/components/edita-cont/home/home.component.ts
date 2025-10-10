import { Component } from '@angular/core';
import { ButtonListComponent } from '../button-list/button-list.component';
import { PopupComponent } from "../../page/popup/popup.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonListComponent, PopupComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']  // Corrigido: styleUrls (plural)
})
export class HomeComponent {
}
