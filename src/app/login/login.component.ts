import { Component } from '@angular/core';
import { SupabaseService } from '../services/supabase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loading: boolean = false;
  user: any

  constructor(
    private supabase: SupabaseService
  ) { }

  async signIn() {
    this.loading = true;
    this.user = await this.supabase.signInWithOAuth();
    this.loading = false;
  }
}
