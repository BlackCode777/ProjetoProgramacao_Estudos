import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked{
        
<<<<<<< HEAD
        public destruir: boolean = true

        constructor(){}        
        
        public DestruirComponente(){
                this.destruir = false;
        }

        ngOnInit(): void {}

=======
        public valor: number = 1;

        constructor(){}

        public adicionar(): number{
                return this.valor += 1;
        }

        ngOnInit(): void {}
        ngDoCheck(): void {
                console.log("ngDoCheck")
         }
        ngAfterContentInit(){
                console.log("ngAfterContentInit")
        }
        ngAfterContentChecked(){
                console.log("ngAfterContentChecked")
        }
        ngAfterViewChecked(): void {
                console.log("ngAfterViewChecked")
        }
        ngAfterViewInit(): void {
                console.log("ngAfterViewInit")
        }
>>>>>>> feature/entendendo-ngDoCheck

}
