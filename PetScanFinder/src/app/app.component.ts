import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { BarcodeScannerLivestreamComponent } from 'ngx-barcode-scanner';

@Component({
  selector: 'app-root',
  templateUrl:'app.component.html',  
  styleUrls: ['app.component.scss']
})

export class AppComponent implements AfterViewInit {
  @ViewChild(BarcodeScannerLivestreamComponent)
  barcodeScanner: BarcodeScannerLivestreamComponent = new BarcodeScannerLivestreamComponent;
  barcodeValue: any;
  construtor() {}
  ngOnInit(){
    //document.querySelector("barcodeScanner2").innerHTML = this.barcodeScanner;
  }
  onStarted() {
    this.barcodeScanner.start();
  }
  onValueChanges(event: any) {
    this.barcodeValue = this.barcodeScanner.start() + event;
    //this.barcodeValue = event.detail.value;
  }  
  
  ngAfterViewInit(): void {
    this.barcodeScanner.start();
  } 

  onDetected(detected: any) {
    console.log(detected);
    this.barcodeScanner.start();
  }

  
}


//src?: string | Uint8Array | Buffer;

// onValueChanges(result: { codeResult: { code: any; }; }) {
  //   this.barcodeValue = result.codeResult.code;
  // }

// onBarcodeScanner(result: any): void{
  //   if(result.codeResult && result.codeResult.code){
  //     const barcode = result.codeResult.barcode;
  //     console.log(barcode);
  //   }    
  // }