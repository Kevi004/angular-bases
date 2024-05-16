import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DvzService } from '../services/dbz.service';

@Component({
  selector: 'app-dvz-main-page',
  templateUrl: './main-page.component.html',
})

export class MainPageComponent {

  constructor(private dbzService:DvzService){}

  get characters(): Character[]{
    return [...this.dbzService.characters];
  }
  onDeleteCharacter( id: string ): void{
    this.dbzService.onDeleteCharacterById(id);
  }
  onNewCharacter(character:Character): void{
    this.dbzService.addCharacter(character);
  }
}



