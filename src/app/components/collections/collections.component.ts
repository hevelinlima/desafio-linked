import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable, map, tap } from 'rxjs';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css']
})
export class CollectionsComponent implements OnInit {

  queryField = new FormControl();
  blockField = new FormControl('', Validators.required);

  readonly SEARCH_URL = 'https://api.magicthegathering.io/v1/sets';
  results$!: Observable<any>;
  selectedSetId: string | null = null;
  boosterCards: any[] = [];
  showResults: boolean = true;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  onSearch(){
    let name = this.queryField.value;
    let block = this.blockField.value;

    if(this.blockField.valid){
      
      if(name && (name = name.trim()) !== ''){
        this.results$ = this.http.get(this.SEARCH_URL + "?name=" + name + "|" + block)
      .pipe(
        map((res: any) => res.sets)
      )
      }else{
        this.results$ = this.http.get(this.SEARCH_URL + "?name=" + block)
      .pipe(
        map((res: any) => res.sets)
      )
      }
      this.showResults = true;
    }
  }

  onSelectSet(setId: string):void{
    this.selectedSetId = setId;
    this.showResults = false;
    this.getBoosterCards(setId);
  }

  getBoosterCards(setId: string):void{
    const BOOSTER_URL = this.SEARCH_URL + `/${setId}/booster`;

    this.http.get<any>(BOOSTER_URL)
    .pipe(
      map((res: any) => res.cards)).subscribe(
      cards => {
        this.boosterCards = cards;
      },
      error => {
        console.error('Erro ao buscar boosters:', error);
      }
    );
  }
}
