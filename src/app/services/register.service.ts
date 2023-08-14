import { Injectable } from '@angular/core';
import { TeamModel } from '../models/team';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  teams: TeamModel[] = [];

  semifinalist: TeamModel[] = [];

  finalist!: TeamModel;

  constructor() { 
  }

  registerTeam(team: TeamModel) {
    this.teams.push(team);
  }

  getTeams() {
      return this.teams;
  }

  setSemiFinalists(teams: TeamModel[]){
    teams.forEach(team => {
      this.semifinalist.push(team);
    });
  }

  getSemiFinalists() {
    return this.semifinalist;
  }

  setFinalist(team: TeamModel) {
    this.finalist = team;
  }

  getFinalist() {
      return this.finalist;
  }

  newTornament(){
    this.teams= [];
  }
}
