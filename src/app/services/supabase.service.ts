import { Injectable } from '@angular/core';
import { SupabaseClient, createClient, AuthError, PostgrestError } from '@supabase/supabase-js';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey)
  }

  private _errorHandler(data: any, error: PostgrestError | AuthError | null) {
    if (error) {
      console.error(error)
      return null
    } else {
      return data;
    }
  }

  async signInWithOAuth() {
    const { data, error } = await this.supabase.auth.signInWithOAuth({
      'provider': 'google'
    })

    return this._errorHandler(data, error);
  }

  async getUser() {
    const { data, error } = await this.supabase.auth.getUser();
    return this._errorHandler(data, error);
  }

  async signout() {
    const { error } = await this.supabase.auth.signOut()
  }
}
