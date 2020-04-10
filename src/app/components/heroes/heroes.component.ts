import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../models/heroes.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
})
export class HeroesComponent implements OnInit {
  heroes: Heroe[] = [];

  // tslint:disable-next-line: variable-name
  constructor(private _heroesService: HeroesService,
              private router: Router) {}

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
  }
  verHeroe(i: number) {
    this.router.navigate(['/infoHeroe', i]);
  }
}
