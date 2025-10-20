import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { finalize } from 'rxjs';
import { LoadingService } from '../services/loading.service'; // Verifique se o caminho está correto

// Define o interceptor como uma constante do tipo HttpInterceptorFn
export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  // 'inject' é usado para obter o serviço dentro da função
  const loadingService = inject(LoadingService);

  loadingService.show();

  return next(req).pipe(
    finalize(() => {
      loadingService.hide();
    })
  );
};