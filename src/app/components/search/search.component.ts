import { Component, OnInit, Input } from '@angular/core';
import { Heroe } from '../../models/heroes.interface';
import { HeroesService } from 'src/app/services/heroes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {
  @Input() heroes: any[] = [];
  texto: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private _heroesService: HeroesService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.texto = params['nombre'];
      this.heroes = this._heroesService.buscarHeroes(params['nombre']);
    });
  }
}
