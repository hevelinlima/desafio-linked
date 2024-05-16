import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://api.magicthegathering.io/v1/sets'; 

  constructor(private http: HttpClient) {}

  searchData(name: string, block: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/search?name=${name}&block=${block}`);
  }
}
