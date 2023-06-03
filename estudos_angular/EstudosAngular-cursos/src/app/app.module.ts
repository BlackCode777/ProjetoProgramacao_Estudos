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
import { EstudoNgClassCssComponent } from './estudo-ng-class-css/estudo-ng-class-css.component';

@NgModule({
        declarations: [
                AppComponent,
                TitleComponent,
                DataBindingInterpolationComponent,
                PropertyBindingComponent,
                EstudoTwoWayBindingComponent,
                EstudoNgClassCssComponent
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
