import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LoadingService } from '../../model/services/loading.service';

// Importações necessárias para o template
import { NgIf, AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [NgIf, AsyncPipe],
  providers: [LoadingService],
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent {
  isLoading$: Observable<boolean>;

  constructor(private loadingService: LoadingService) {
    this.isLoading$ = this.loadingService.loading$;
  }
}