import { CanActivateFn, Router } from '@angular/router';


export const authGuardGuard: CanActivateFn = (route, state) => {
  const token = localStorage.getItem('authToken');

  if(!token){
    const router = new Router()
    router.navigate(['/login']);
    return false;
  }
  return true;
};
