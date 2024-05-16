import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {
  private baseUrl = 'https://api.magicthegathering.io/v1';

  constructor(private http: HttpClient) {}

  searchSets(name: string, block: string): Observable<any> {
    let queryParams = ''; 
    
    if (name) {
      queryParams += `name=${name}`;
    }
    
    if (block) {
      queryParams += queryParams ? `&block=${block}` : `block=${block}`;
    }
  
    const url = `${this.baseUrl}/sets?${queryParams}`;
    console.log('URL da requisição:', url);

    return this.http.get(url);
  }

  getBooster(setId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/sets/${setId}/booster`);
  }

  getAllSets(): Observable<any> {
    return this.http.get(`${this.baseUrl}/sets`);
  }
}
