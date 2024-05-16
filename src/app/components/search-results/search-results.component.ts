import { Component, Input} from '@angular/core';
import { CollectionService } from '../../services/collection.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: [ './search-results.component.css']
})
export class SearchResultsComponent {

  searchResults: any[] = []; 

  constructor(private collectionService: CollectionService) {}

  searchSets(name: string, block: string): void {
    this.collectionService.searchSets(name, block).subscribe(
      (response) => {
        this.searchResults = response; 
      },
      (error) => {
        console.error('Erro ao buscar conjuntos de cartas:', error);
      }
    );
  }
}

