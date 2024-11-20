import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8080/user'; // Cambia a la URL de tu API

  constructor(private http: HttpClient) {}

  // Registrar un nuevo usuario
  createUser(user: User): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/create`, user);
  }

  // Obtener todos los usuarios
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/all`);
  }
}
