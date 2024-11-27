import { Component, OnInit } from '@angular/core';
import { PetService } from '../../services/pet.service';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})
export class PetListComponent implements OnInit {
  pets = [];

  constructor(private petService: PetService) {}

  ngOnInit(): void {
    this.petService.getPets().subscribe(data => {
      this.pets = data;
      console.log('Pets:', this.pets);
    });
  }

  deletePet(id: string): void {
    this.petService.deletePet(id);
  }
}
