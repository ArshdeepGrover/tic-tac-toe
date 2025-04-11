import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BoardComponent } from './component/board/board.component';
import { SquareComponent } from './component/square/square.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, BoardComponent, SquareComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
