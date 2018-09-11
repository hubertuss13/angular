import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SkillShareComponent } from './skill-share/skill-share.component';
import { PawParalaxComponent } from './paw-paralax/paw-paralax.component';

@NgModule({
  declarations: [
    AppComponent,
    SkillShareComponent,
    PawParalaxComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
