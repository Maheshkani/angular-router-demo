import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BackendService } from './backend.service';
import { ContactService } from './contact.service';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,HttpClientModule,AppRoutingModule,InMemoryWebApiModule.forRoot(BackendService) ],
  declarations: [ AppComponent, HelloComponent, ContactListComponent, ContactDetailComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ContactService]
})
export class AppModule { }
