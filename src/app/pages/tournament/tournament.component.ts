import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TeamModel } from 'src/app/models/team';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.scss']
})
export class TournamentComponent {

  teams: TeamModel[] = [];
  semiFinalists : TeamModel [] = [];
  listImages: TeamModel [] =[];

  constructor(
    private router: Router,
    public teamService: RegisterService,) { }


  ngOnInit(): void {
    this.teams = this.teamService.getTeams();
    console.log(this.teams)
  }


  handleImageClick(value: TeamModel) {
    this.listImages.push(value);
  }

  fight(){
    this.semiFinalists.push(this.pickRandom());
    this.semiFinalists.push(this.pickRandom());
    this.teamService.setSemiFinalists(this.semiFinalists);
    this.router.navigate(["/finalists"]);
  }

  pickRandom(){
    const randomIndex = Math.floor(Math.random() * this.teams.length);
    const elementoEscolhido = this.teams[randomIndex];
    this.teams.splice(randomIndex, 1);
    return elementoEscolhido;
  }

  clean(){
    this.listImages =[];
  }

}
