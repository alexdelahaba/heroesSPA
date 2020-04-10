import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe } from '../../models/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-info-heroe',
  templateUrl: './info-heroe.component.html',
})
export class InfoHeroeComponent implements OnInit {
  heroe: any = {};

  constructor(private activatedRoute: ActivatedRoute, private _heroesService: HeroesService) {
    this.activatedRoute.params.subscribe(params => {
      this.heroe = this._heroesService.getHeroe(params['id']);
    });
   }

  ngOnInit(): void {
  }



}
