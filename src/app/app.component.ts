import { Component, OnInit } from '@angular/core';
import { CollectionService } from './services/collection.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  constructor(private collectionService: CollectionService) {}

  ngOnInit(): void {
    this.collectionService.getAllSets().subscribe(
      (response) => {
        // console.log('Conjuntos de cartas:', response);
      },
      (error) => {
        console.error('Erro ao buscar conjuntos de cartas:', error);
      }
    );
  }
}