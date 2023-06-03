import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TitleComponent } from './title/title.component';
import { DataBindingInterpolationComponent } from './data-binding-interpolation/data-binding-interpolation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EstudoTwoWayBindingComponent } from './estudo-two-way-binding/estudo-two-way-binding.component';
import { FormsModule } from '@angular/forms';
import { EstudoDiretivasEstruturaisNgifNgelseNgforNgswitchComponent } from './estudo-diretivas-estruturais-ngif-ngelse-ngfor-ngswitch/estudo-diretivas-estruturais-ngif-ngelse-ngfor-ngswitch.component';
import { ConverteHoraParaDecimalComponent } from './converte-hora-para-decimal/converte-hora-para-decimal.component';

@NgModule({
        declarations: [
                AppComponent,
                TitleComponent,
                DataBindingInterpolationComponent,
                PropertyBindingComponent,
                EstudoTwoWayBindingComponent,
                EstudoDiretivasEstruturaisNgifNgelseNgforNgswitchComponent,
                ConverteHoraParaDecimalComponent
        ],
        imports: [
                FormsModule,
                BrowserModule,
                AppRoutingModule,
                BrowserAnimationsModule
        ],
        providers: [],
        bootstrap: [AppComponent]
})
export class AppModule { }
