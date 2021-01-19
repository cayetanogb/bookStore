import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { ConfigService } from './services/config/config.service';
import { BookStoreService } from './services/book-store/book-store.service';
import { LoggerService } from './services/logger/logger.service';

@NgModule({
  declarations: [
    AppComponent,
    BookDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ConfigService,
    BookStoreService,
    LoggerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
