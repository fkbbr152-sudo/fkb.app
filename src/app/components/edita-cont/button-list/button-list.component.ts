import { Component, OnInit } from '@angular/core';
import { ButtonService } from '../../../model/services/button.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { API_ENDPOINTS } from '../../../model/core/config/api-endpoints';

@Component({
  selector: 'app-button-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [ButtonService],
  templateUrl: './button-list.component.html',
  styleUrl: './button-list.component.scss'
})
export class ButtonListComponent implements OnInit {
  buttons: any[] = [];
  visibleButtons: any[] = [];

  constructor(private buttonService: ButtonService) {}

  ngOnInit(): void {
    this.loadButtons();
  }

loadButtons(): void {
  this.buttonService.getButtons().subscribe(data => {
    const safeData = Array.isArray(data) ? data : []; // evita erro caso venha null
    this.buttons = safeData.map(b => ({
      ...b,
      visible: b.visible !== undefined ? !!b.visible : true
    }));
    this.filterVisibleButtons?.(); // chamada protegida
  });
}


  filterVisibleButtons(): void {
    this.visibleButtons = this.buttons.filter(b => b.visible);
  }

  getFileUrl(link: string): string {
    if (link.startsWith('arquivos/btnhero/')) {
      return `${API_ENDPOINTS.base}${link}`;
    }
    return link;
  }

  isPdf(link: string): boolean {
    return link.toLowerCase().endsWith('.pdf');
  }
}
