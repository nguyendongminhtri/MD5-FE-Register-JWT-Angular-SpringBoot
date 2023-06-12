import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {SignUpForm} from '../model/SignUpForm';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private API_SIGNUP = environment.API_LOCAL + 'signup';
  constructor(private httClient: HttpClient) { }
  signUp(signUpForm: SignUpForm): Observable<any>{
    return this.httClient.post<any>(this.API_SIGNUP, signUpForm);
  }
}
