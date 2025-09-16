import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  private url = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<boolean> {
    return this.http.get<any[]>(this.url).pipe(
      map(users => {
        const user = users.find(u => u.email == email && u.password == password);
         return !!user; 
      })
    )
  }
}
