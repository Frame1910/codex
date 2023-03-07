import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { SupabaseService } from '../services/supabase.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private supabase: SupabaseService, private router: Router) { };
  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean> {
    const user = await this.supabase.getUser();
    console.log(user);
    if (user) {
      return true
    } else {
      this.router.navigate(['login'])
      return false
    }
  }

}
