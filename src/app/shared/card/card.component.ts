import { Component, Input } from '@angular/core';
import { TeamModel } from 'src/app/models/team';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input()team!: TeamModel;
  
  ngOnInit(): void {
  }
}
