import { Component } from '@angular/core';
import { PetService } from '../../services/pet.service';

@Component({
  selector: 'app-pet-form',
  templateUrl: './pet-form.component.html',
  styleUrls: ['./pet-form.component.css']
})
export class PetFormComponent {
  pet = {
    nome: '',
    especie: '',
    idade: 0,
    peso: 0,
    cor: '',
    sexo: 'Masculino'
  };

  constructor(private petService: PetService) {}

  onSubmit(): void {
    this.petService.addPet(this.pet);
    this.pet = {
      nome: '',
      especie: '',
      idade: 0,
      peso: 0,
      cor: '',
      sexo: 'Masculino'
    }; // Reset form
  }
}
