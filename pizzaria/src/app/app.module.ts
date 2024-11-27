import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { AppComponent } from './app.component';
import { PetListComponent } from './components/pet-list/pet-list.component';
import { PetFormComponent } from './components/pet-form/pet-form.component';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    PetListComponent,
    PetFormComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
