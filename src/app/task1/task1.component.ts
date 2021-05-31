import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Url } from 'url';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.scss']
})
export class Task1Component implements OnInit {
  dataListSubmenu = [];
  constructor(
    private _http: HttpClient
  ) { }

  ngOnInit(): void {
    const url = 'https://pokeapi.co/api/v2/pokemon/ditto';
    this._http.get(url).subscribe((res: any) => {
      if (res && res.game_indices) {
        const game_indices = res.game_indices;
        game_indices.forEach((item) => {
          if (item.version && item.version.name) {
            this.dataListSubmenu.push(item.version.name);
          }
        });
      }
    });
  }

}
