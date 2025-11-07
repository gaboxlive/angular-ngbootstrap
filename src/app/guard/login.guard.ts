import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AppStore } from '../state/appStore';

export const loginGuard: CanActivateFn = () => {
  const userProfileStore = inject(AppStore);
  const router = inject(Router);

  if (userProfileStore.isLogged()) {
    return true;
  }
  return router.createUrlTree(['/login']);
};
