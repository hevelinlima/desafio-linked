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
    let valueField = this.queryField.value;

    let valueBlock = this.blockField.value;

    if(this.blockField.valid){
      
      if(valueField && (valueField = valueField.trim()) !== ''){
        this.results$ = this.http.get(this.SEARCH_URL + "?name=" + valueField + "|" + valueBlock)
      .pipe(
        map((res: any) => res.sets)
      )
      }else{
        this.results$ = this.http.get(this.SEARCH_URL + "?name=" + valueBlock)
      .pipe(
        map((res: any) => res.sets)
      )
      }
    }
  }
}
