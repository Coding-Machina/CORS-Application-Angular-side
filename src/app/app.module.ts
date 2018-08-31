import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule} from '@angular/Forms';

import { AppComponent } from './app.component';
import { BatchComponent } from './batch/batch.component';
import { BatchService } from "./batch.service";
import { AppServiceService } from "./app-service.service";
import { HttpClientModule } from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    BatchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [BatchService, AppServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
