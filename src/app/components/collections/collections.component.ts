import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrl: './collections.component.css'
})
export class CollectionsComponent {
  name: string = '';
  block: string = '';
  searchResults: any[] = [];
  
  @Output() search: EventEmitter<any> = new EventEmitter();

  constructor() {}

  searchCollections(): void {
    console.log('Dados de busca:', { name: this.name, block: this.block });
    this.search.emit({ name: this.name, block: this.block });
  }
}
