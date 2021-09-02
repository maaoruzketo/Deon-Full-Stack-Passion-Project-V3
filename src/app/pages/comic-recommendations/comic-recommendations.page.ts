import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-comic-recommendations',
  templateUrl: './comic-recommendations.page.html',
  styleUrls: ['./comic-recommendations.page.scss'],
})
export class ComicRecommendationsPage implements OnInit {

  recommendation;
  constructor(private dService: DataService) {
    this.recommendation = this.dService.getLibraryInfo();
   }

  ngOnInit() {
  }

}
