import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { imageData } from 'src/app/models/imageData';
import { TeamModel } from 'src/app/models/team';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.scss']
})
export class FormRegisterComponent {
  formTeamRegister!: FormGroup;
  formValidate = false;
  clickedElement: any;
  url: string = "";
  constructor(
    private fb: FormBuilder,
    private router: Router,
    public teamService: RegisterService,) { }


  images = imageData;


  ngOnInit(): void {
    this.formInitialize();

  }

  formInitialize() {
    this.formTeamRegister = this.fb.group({
      nome: [null, Validators.required],
      resistencia: [null, Validators.required],
      forca: [null, Validators.required],
      agilidade: [null, Validators.required],
    })
  }

  cadastrar() {

    this.validateForm();
    if (this.formValidate) {
      let model = new TeamModel;
      Object.assign(model, this.formTeamRegister.value);
      model.urlImagem= this.url;
      console.log(model);
      this.teamService.registerTeam(model);
      alert("Time cadastrado com sucesso!")
      this.formInitialize();
    } else {
      alert("favor preencher o formulario corretamente");
    }

  }

  concluir() {
    this.router.navigate(['/tournament']);
  }

  validateForm() {
    const nome = this.formTeamRegister.get("nome");
    const resistencia = this.formTeamRegister.get("resistencia");
    const forca = this.formTeamRegister.get("forca");
    const agilidade = this.formTeamRegister.get("agilidade");

    if (nome?.invalid || resistencia?.invalid || forca?.invalid || agilidade?.invalid) {
      this.formValidate = false;
    } else {
      this.formValidate = true;
    }
  }

  handleImageClick(value: any) {
    this.clickedElement = value.id;
    this.url = value.url;
    console.log(value);
  }
}
