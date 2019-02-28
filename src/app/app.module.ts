import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SkyModalDemoComponent } from './skymodaldemo.component';
import { SkyModalModule } from '@skyux/modals';
import { AddinClientService } from '@blackbaud/skyux-lib-addin-client';

@NgModule({
  declarations: [
    AppComponent,
    SkyModalDemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    SkyModalModule
  ],
  providers: [AddinClientService],
  entryComponents:[SkyModalDemoComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
