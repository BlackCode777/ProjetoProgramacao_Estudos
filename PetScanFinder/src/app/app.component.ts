import { Component, ViewChild, ElementRef } from '@angular/core';
import Quagga from 'quagga';

@Component({
  selector: 'app-root',
  template:
  `
  <div #cameraView></div>
  <button (click)="capture()">Take Picture</button>
  `
  
})
export class AppComponent {
  
  @ViewChild('cameraView')
  cameraView!: ElementRef;
  onDetected: any;
  onDetectedError: any;

  construtor() {}

  // crie uma função para capturar a imagem
  capture() { 
    // crie uma variável para acessar o elemento nativo
    const video = this.cameraView.nativeElement;

    Quagga.init({
      inputStream: {
        name: "Live",
        type: "LiveStream",
        target: video
      },
      decoder: {
        readers: ["ean_reader"] //Configura o tipo de leitura do código de barras
      }
    }, (err: any) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log("Initialization finished. Ready to start");
      Quagga.start();
      Quagga.onDetected(this.onDetected.bind(this));
      Quagga.onDetectedError(this.onDetectedError.bind(this));      
      Quagga.stop();
    });

    // crie uma variável para acessar a câmera
    // navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
    //   .then(stream => video.srcObject = stream)
    //   .catch(error => console.log(error));
  }

}
