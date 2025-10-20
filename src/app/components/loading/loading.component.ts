import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import Swal from 'sweetalert2';
import { LoadingService } from '../../model/services/loading.service';
@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [],
  template: '',
})
export class LoadingComponent implements OnInit, OnDestroy {
  
  private destroy$ = new Subject<void>();

  constructor(private loadingService: LoadingService) {
    // LOG 1: Este log deve aparecer UMA VEZ quando a aplicação carrega.
    console.log('✅ LoadingComponent foi construído e está pronto.');
  }

  ngOnInit(): void {
    this.loadingService.loading$
      .pipe(takeUntil(this.destroy$))
      .subscribe((isLoading) => {
        // LOG 2: Este é o mais importante. Deve aparecer como TRUE e depois FALSE a cada requisição.
        console.log('🔴 LoadingComponent recebeu novo estado:', isLoading);

        if (isLoading) {
          this.showLoadingAlert();
        } else {
          Swal.close();
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private showLoadingAlert(): void {
    Swal.fire({
      title: 'Aguarde!',
      html: 'Processando sua requisição...',
      allowOutsideClick: false,
      allowEscapeKey: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });
  }
}