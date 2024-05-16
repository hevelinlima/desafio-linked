import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable, map, tap } from 'rxjs';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrl: './collections.component.css'
})
export class CollectionsComponent implements OnInit {

  queryField = new FormControl();
  blockField = new FormControl('', Validators.required);

  readonly SEARCH_URL = 'https://api.magicthegathering.io/v1/sets';

  results$!: Observable<any>;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    
  }

  onSearch(){
    if(this.blockField.valid){
      console.log("Name:", this.queryField.value);
      console.log("Block:", this.blockField.value);

      this.results$ = this.http.get(this.SEARCH_URL + "?name=khans")
      .pipe(
        map((res: any) => res.sets),
        tap(results => console.log('Resultados:', results))
      )
    }
  }
}
