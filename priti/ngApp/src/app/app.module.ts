import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';
import { DataService } from './data.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AddComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    
    RouterModule.forRoot([
      {path:'home',component:HomeComponent},
      {path:'contact',component:ContactComponent},
      {path:'add',component:AddComponent},
      {path:'update/:no',component:UpdateComponent},

    ])

  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
