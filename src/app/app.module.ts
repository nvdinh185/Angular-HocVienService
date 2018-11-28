import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";

import { AppComponent } from './app.component';
import { HocVienComponent } from './hoc-vien/hoc-vien.component';
import { HocVienService } from './hoc-vien/hocvien.service'

@NgModule({
  declarations: [
    AppComponent,
    HocVienComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [HocVienService],
  bootstrap: [AppComponent]
})
export class AppModule { }
