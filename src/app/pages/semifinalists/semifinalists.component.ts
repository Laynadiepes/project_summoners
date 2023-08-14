import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TeamModel } from 'src/app/models/team';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-semifinalists',
  templateUrl: './semifinalists.component.html',
  styleUrls: ['./semifinalists.component.scss']
})
export class SemifinalistsComponent {

  semifinalists: TeamModel[] = [];
  finalist!: TeamModel

  constructor(
    private router: Router,
    public teamService: RegisterService,) { }


  ngOnInit(): void {
    this.semifinalists = this.teamService.getSemiFinalists();
  }

  fight() {
    this.teamService.setFinalist(this.pickRandom());
    this.finalist = this.teamService.getFinalist();
  }

  pickRandom() {
    const randomIndex = Math.floor(Math.random() * this.semifinalists.length);
    const elementoEscolhido = this.semifinalists[randomIndex];
    return elementoEscolhido;
  }

  newTournament() {
    this.teamService.newTornament();
    this.router.navigate(['']);
  }
}
