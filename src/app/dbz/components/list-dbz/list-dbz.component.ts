import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'list-dbz',
  templateUrl: './list-dbz.component.html',
  styleUrl: './list-dbz.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListDbzComponent {

  @Input ()
  public characterList: Character[] = [{
    name:'Trunks',
    power: 10
  }];

  @Output()
  public onDelete: EventEmitter <string> = new EventEmitter();

  onDeleteCharacter(id?: string): void{
    if (!id) return;
    this.onDelete.emit( id);

  }

 }
