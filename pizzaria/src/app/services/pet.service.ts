import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { environment } from 'src/environments/environment';
import { initializeApp } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class PetService {
  private db;

  constructor(private firestore: AngularFirestore) {
    initializeApp(environment.firebaseConfig);
    this.db = firestore.collection('pets');
  }

  // Adicionar um pet
  addPet(pet) {
    return this.db.add(pet);
  }

  // Listar todos os pets
  getPets() {
    return this.db.valueChanges();
  }

  // Atualizar pet
  updatePet(id: string, pet: any) {
    return this.db.doc(id).update(pet);
  }

  // Excluir pet
  deletePet(id: string) {
    return this.db.doc(id).delete();
  }
}
