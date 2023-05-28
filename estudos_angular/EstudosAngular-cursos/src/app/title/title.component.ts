import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-title', 
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent  implements OnInit, OnChanges{

        @Input() public title: string = "Meu Nome é Anderson"

        constructor(){}

        ngOnInit() {}
        ngOnChanges(): void{
                console.log("Foi alterado aqui !")
        }
}
