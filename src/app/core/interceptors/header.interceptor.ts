import { isPlatformBrowser } from '@angular/common';
import { HttpInterceptorFn } from '@angular/common/http';
import { inject, PLATFORM_ID } from '@angular/core';

export const headerInterceptor: HttpInterceptorFn = (req, next) => {
  const pLATFORM_ID = inject(PLATFORM_ID);

  if(isPlatformBrowser(pLATFORM_ID)){
    // token value
    localStorage.setItem("token","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjgxNWNmMjk4MDNmNzZiZjAwYzBmNTUxIiwiaWF0IjoxNzQ2NDIxNjgxfQ.ynb5Vr_lRUdsZH0cI3TabllF-3UM5G13LXQtqxFK0yA")
    if(localStorage.getItem("token") !== null){
    console.log('Token from localStorage:', localStorage.getItem("token"));

      req = req.clone({
        setHeaders:{token:localStorage.getItem("token")!}
      })
    }
  }
  return next(req);
};
