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

  fixImageUrl(url: string): string {
    return url.replace('http://', 'https://');
  }
}


