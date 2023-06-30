import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BarcodeScannerLivestreamModule } from 'ngx-barcode-scanner';
import { ConsoleBotoesExtracaoRelatoriosComponent } from './console-botoes-extracao-relatorios/console-botoes-extracao-relatorios.component';

import { ButtonModule } from 'primeng/button';

@NgModule({
	declarations: [
		AppComponent,
		ConsoleBotoesExtracaoRelatoriosComponent
	],
	imports: [
		ButtonModule,
		BarcodeScannerLivestreamModule,
		CommonModule,
		FormsModule,
		RouterModule.forRoot(AppRoutingModule.routes),
		BrowserModule,
		AppRoutingModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
