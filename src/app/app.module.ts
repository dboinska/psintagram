import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { DogImgComponent } from './dog-img/dog-img.component';
import { FormsModule } from '@angular/forms';
import { DogApiService } from './dogApi.service';

@NgModule({
  imports: [BrowserModule, HttpClientModule, ReactiveFormsModule, FormsModule],
  declarations: [AppComponent, TopBarComponent, DogImgComponent],
  providers: [DogApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
