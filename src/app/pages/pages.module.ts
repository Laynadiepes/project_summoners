import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { RoutingModule } from './routing.module';
import { RegisterComponent } from './register/register.component';
import { TournamentComponent } from './tournament/tournament.component';
import { RegisterModule } from './register/register.module';
import { SemifinalistsComponent } from './semifinalists/semifinalists.component';



@NgModule({
  declarations: [ HomeComponent, RegisterComponent, TournamentComponent, SemifinalistsComponent],
  imports: [
    CommonModule,
    RoutingModule,
    SharedModule,
    RegisterModule
  ]
})
export class PagesModule { }
