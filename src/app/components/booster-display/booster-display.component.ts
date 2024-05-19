import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-booster-display',
  templateUrl: './booster-display.component.html',
  styleUrl: './booster-display.component.css'
})
export class BoosterDisplayComponent implements OnInit {
  @Input() boosterCards: any[] = [];

  constructor() {}

  ngOnInit() {}

  colorIcons: { [key: string]: string } = {
    'U': 'assets/images/U-island.webp',
    'B': 'assets/images/B-swamp.webp',
    'R': 'assets/images/R-mountain.webp',
    'G': 'assets/images/G-forest.png',
    'W': 'assets/images/W.webp',
  };

  fixImageUrl(url: string): string {
    return url.replace('http://', 'https://');
  }

  getIconURL(color: string): string {
    return this.colorIcons[color] || '';
  }
}


